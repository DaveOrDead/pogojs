const expect = require('chai').expect;
const pogo = require('./index');

// dummy event registration
pogo.register({
    func: () => {},
    hook: 'hook1',
    type: 'click'
}, {
    func: () => {},
    hook: 'hook2',
    type: 'change'
}, {
    func: () => {},
    hook: 'hook3',
    type: 'immediate'
});

const pogoMap = pogo.getMap();

describe('register', () => {

    it('should register an event per argument', () => {
        expect(Object.keys(pogoMap).length).to.equal(3);
    });

    it('should convert hooks to keys', () => {
        expect(Object.keys(pogoMap)).to.deep.equal([ 'hook1', 'hook2', 'hook3' ]);
    });

    it('should allow multiple types per hook', () => {
        pogo.register({
            func: () => {},
            hook: 'hook1',
            type: 'mouseup'
        });
    expect(pogoMap.hook1.length).to.equal(2);
    });
});

describe('getMap', () => {

    it('should return an object', () => {
        expect(pogoMap).to.be.an('object');
    });

    it('should return a key per argument', () => {
        expect(Object.keys(pogoMap).length).to.equal(3);
    });

});
