import getCustomAttributeSet from './utils/getCustomAttributeSet';

/**
 * Creates `dataset` type functionality for `pogo-` attributes
 * @param {Node} el - the element to check for attributes
 * @return {Object} pogo attributes wiithin the element in camelcase with the prefix `pogo-` removed
 */
const pogoset = el => getCustomAttributeSet(el, 'pogo-');


export default pogoset;
