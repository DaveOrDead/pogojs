// Vendor
import chai, {expect} from 'chai';
import spies from 'chai-spies';
// Utilities
import each from './each';

chai.use(spies);


const arr = ['1', '2', '3'];
const spy = chai.spy();

describe('Each utility', () => {
    it('should call a function once per array item', () => {
        each(arr, spy);
        expect(spy).to.have.been.called.exactly(3);
    });
});
