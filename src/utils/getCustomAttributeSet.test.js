const expect = require('chai').expect;
import getCustomAttributeSet from './getCustomAttributeSet';

// dummy attributes data
const set = {
    attributes: [
        {
            nodeName: 'pogo-load',
            nodeValue: 'my_file'
        },
         {
            nodeName: 'pogo-some-attribute',
            nodeValue: true
        }
    ]
};


describe('getCustomAttributeSet', () => {
    it('should ignore short strings', () => {
        expect(getCustomAttributeSet(set, 'h')).to.be.an('object');
    });

    it('should ignore no prefix', () => {
        expect(getCustomAttributeSet(set)).to.be.an('object');
    });
});
