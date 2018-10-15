import { publish } from "./pogoStreams";

const pogoState = {};

function updatePogoState(newState) {
    Object.assign(pogoState, newState);
    publish(...Object.keys(newState));
}

function fetchPogoState(key) {
    return pogoState[key];
}

export { fetchPogoState, updatePogoState, pogoState };
