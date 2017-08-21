var chai = require('chai');
var assert = chai.assert;
var growingkeys = require('../growingkeys.js');

describe('growingkeys function', function () {
  it('should return a key duplicated equivalent to the number argument', function () {
      assert.equal(growingkeys(2, "hello"), { hellohello: true });
  });

  it('should return hello even if number is 0', function () {
      assert.equal(growingkeys(0, "hello"), { hello: true });
  });

  it('should return hello if number is negative', function () {
    assert.equal(growingkeys(-5, "hello"), { hello: true });
  });

  it('should defualt to "tucker" as the key if none is passed in', function () {
    assert.equal(growingkeys(1), { tucker: true });
  });
});
