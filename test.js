const assert = require('assert');
const composeFunc = require('./compose.js').composeFunc;
const pipeFunc = require('./compose.js').pipeFunc;

const s1 = (str) => str+'1';
const s2 = (str) => str+'2';
const s3 = (str) => str+'3';

describe('#composeFunc', () => {
  it('should return "test321" when input is "test"', () => {
    assert( composeFunc(s1, s2, s3)('test') === 'test321');
  });
});

describe('#pipeFunc', () => {
  it('should return "test123" when input is "test"', () => {
    assert( pipeFunc(s1, s2, s3)('test') === 'test123');
  });
});


