const pogoMap = {};

/**
 * Adds items to a function map
 * @param {Object} ...params -
 * @param {key} func - the function to be called
 * @param {key} type - the event type or 'immediate' to be called on load
 * @param {key} hook - the related `pogo-` class
 */
function register(...params) {
    params.map(item => {
        const {hook, type, func} = item;
        if (!pogoMap[hook]) pogoMap[hook] = [];
        pogoMap[hook].push({func, type});
    });
}

function getMap() {
    return pogoMap;
}

export {
    getMap,
    register
};
