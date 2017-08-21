const expect = require('chai').expect;
const pogo = require('./index');

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


describe('pogoset', () => {
    const res = pogo.pogoset(set);

    it('should return an object', () => {
        expect(res).to.be.an('object');
    });

    it('should remove `pogo` prefix', () => {
        expect(res.load).to.equal('my_file');
    });

    it('should return a key/value pair per `pogo` attribute', () => {
        expect(Object.keys(res).length).to.equal(2);
    });
});
