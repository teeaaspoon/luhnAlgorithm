var assert = require("chai").assert;
var check = require("./check.js");

describe("AddOne Function", function(params) {
    it("Should return one", function() {
        assert.deepEqual(check.returnOne(10), 1);
    });
});
