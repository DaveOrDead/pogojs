import { pogoState } from "./pogoState";
import arrayContainsFunction from "./utils/arrayContainsFunction";
import arrayContainsString from "./utils/arrayContainsString";

const subscribers = {};

const isAlreadySubscribed = (stream, cb, callerId) =>
    arrayContainsString(subscribers[stream].callers, callerId) &&
    arrayContainsFunction(subscribers[stream].callbacks, cb);

function subscribe(streams, cb, callerId) {
    const subs = streams.trim().split(/\s+/);
    subs.map(stream => {
        subscribers[stream] = subscribers[stream] || {
            callbacks: [],
            callers: []
        };
        // Prevent functions being subscribed multiple times
        if (!isAlreadySubscribed(stream, cb, callerId)) {
            subscribers[stream].callers.push(callerId);
            subscribers[stream].callbacks.push(cb);
        }
    });
}

function unsubscribe(stream, cb) {
    const subs = subscribers[stream].callers || [];

    subs.map((s, i) => {
        if (subscribers[stream].callbacks[i] === cb) {
            subscribers[stream].callbacks[i].splice(i, 1);
        }
    });
}

function publish(...streams) {
    streams.map(stream => {
        if (subscribers[stream]) {
            const callbacks = subscribers[stream].callbacks || [];
            callbacks.map(cb => {
                cb(pogoState[stream] || {});
            });
        }
    });
}

export { publish, subscribe, unsubscribe };
