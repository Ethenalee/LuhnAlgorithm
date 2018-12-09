var assert = require("chai").assert;
var luh = require("../lib/luhnfunction");

describe("luhnfunction", function() {
  it("should return Valid if number is 4012888888881881", function() {
    assert.equal('Valid', luh('4012888888881881'));
  });

  it("should return Valid if number is 79927398713", function() {
    assert.equal('Valid', luh('79927398713'));
  });

});