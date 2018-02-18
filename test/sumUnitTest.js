function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

let expect = require('chai').expect;

describe("sum(arr) - sum array of numbers", function() {

    it("should return 3 for [1, 2]", function() {

        expect(sum([1,2])).to.equal(3)
    });
});