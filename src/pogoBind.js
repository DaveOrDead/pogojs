import {getMap} from './pogoMap';
import each from './utils/each';
import hyphenToCamelCase from './utils/hyphenToCamelCase';

const pogoMap = getMap();

/**
 * Gets all `pogo-` classes and either binds events or triggers their initialisation functions by
 * checking them against the function map.
 * @param {Node} context [document] - The element to check for `pogo-` classes.
 */
function pogoBind(context = document) {
    const pogoEls = context.querySelectorAll('[class*="pogo-"]');
    let onloadFuncs = [];

    each(pogoEls, el => {
        const hooks = el.className.match(/pogo-[a-z\d-_]+/ig);
        hooks.map(hook => {
            const key = hyphenToCamelCase(hook.slice(5)); // removes `pogo-`
            if (pogoMap[key]) {
                pogoMap[key].map(item => {
                    const {type, func} = item;
                    if (type === 'immediate') {
                        onloadFuncs = [...onloadFuncs, func.bind(null, el, context)];
                    } else {
                        el.addEventListener(type, func);
                    }
                });
            }
        });
    });
    // Remove and execute all functions that are supposed to trigger immediately onload
    // not just event bindings
    while (onloadFuncs.length > 0) {
        (onloadFuncs.shift())();
    }
}

export default pogoBind;
