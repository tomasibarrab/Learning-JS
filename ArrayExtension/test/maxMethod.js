require('../src/arrayExtension.js');

var chai = require('chai');
var expect = chai.expect;

describe('max Method', function() {
    var bufferTest = [];

    var babes = [{
            name: 'Tomas',
            sex: 'm',
            age: 24
        },
        {
            name: 'Ana',
            sex: 'f',
            age: 45
        },
        {
            name: 'Horhe',
            sex: 'm',
            age: 26
        },
        {
            name: 'CarlosMarin',
            sex: null,
            age: 30
        },
        {
            name: 'Arturo',
            sex: 'm',
            age: 5
        }
    ];

    describe('when given an empty array', function() {
        it('should return null', function() {
            expect(bufferTest.max()).to.eql(null);
        });
    });

    describe('when is called with a callback', function() {
        it('should return the maximum length string', function() {
            expect(babes.max(function(a, b) {
                return a.name.length - b.name.length
            }).name).to.eql('CarlosMarin');
        });
    });

    describe('when is called with a callback', function() {
        it('should return the maximum number', function() {
            expect(babes.max(function(a, b) {
                return a.age - b.age;
            }).name).to.eql('Ana');
        });
    });

    describe('when is called for an array of strings', function() {
        var strings = ['thisisthelargest', 'This', 'is', 'awesome'];
        it('should return the largest string', function() {
            expect(strings.max(function(a, b) {
                return a.length - b.length;
            })).to.eql('thisisthelargest');
        });
    });

    describe('when is called for an array of numbers', function() {
        var nums = [1, 2, 3, 4, 5, 20, 30];
        it('should return the higher number', function() {
            expect(nums.max()).to.eql(30);
        });
    });
});
