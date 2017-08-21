var expect = require('chai').expect;
var pogo = require('./index');

var set = {
    attributes: {
        ['pogo-load']: 'my_file',
        ['pogo-some-attribute']: true
    }
};


describe('pogo', function() {
    it('should return an object', function() {
        expect(pogo.pogoset(set)).to.be.an('object');
    });
});
