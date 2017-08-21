import hyphenToCamelCase from './hyphenToCamelCase';
import each from './each';

const getCustomAttributeSet = (el, prefix = '') => {
    const attributeSet = {};
    each(el.attributes, attribute => {
        const att = attribute.nodeName.toLowerCase();
        if (att.length >= prefix.length && att.substring(0, prefix.length) === prefix) {
            attributeSet[hyphenToCamelCase(att.substring(prefix.length, att.length))] = attribute.nodeValue;
        }
    });

    return attributeSet;
};


export default getCustomAttributeSet;
