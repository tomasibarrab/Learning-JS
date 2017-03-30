require('../src/arrayExtension.js');

var chai = require('chai');
var expect = chai.expect;

describe('flatten Method', function() {
    var bufferTest = [];

    describe('when given an empty array', function() {
        it('should return an empty array', function() {
            expect(bufferTest.flatten()).to.eql([]);
        });
    });

    describe('when is called with a multidimentional array of numbers', function() {
        var nums = [1, 2, 3, [4, 5, [6, 7, 8], 9, 10, 11, 12, 13, 14], 15, 16];
        it('should return the flattened array', function() {
            expect(nums.flatten()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        });
    });

    describe('when is called with a multidimentional array of strings', function() {
        var strings = [['Yo dawg!', ['For', ['me', 'this', 'is'], 'awesome', 'dude!']]];
        it('should return the flattened array', function() {
            expect(strings.flatten()).to.eql(['Yo dawg!', 'For', 'me', 'this', 'is', 'awesome', 'dude!']);
        });
    });
});
