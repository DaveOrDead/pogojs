// Vendor
import {expect} from 'chai';
// Utilities
import hyphenToCamelCase from './hyphenToCamelCase';


describe('Hyphen to camel case utility', () => {
    it('should convert hyphenated words to camelcase', () => {
        expect(hyphenToCamelCase('pogo-bind')).to.equal('pogoBind');
    });

    it('should handle multiple hyphens', () => {
        expect(hyphenToCamelCase('pogo-run-away')).to.equal('pogoRunAway');
    });
});
