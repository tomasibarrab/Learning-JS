require('../src/arrayExtension.js');

var chai = require('chai');
var expect = chai.expect;

describe('each Method', function() {
    var bufferTest = [];

    var people = [{
            name: 'Marcos',
            age: 19
        },
        {
            name: 'Tomas',
            age: 15
        },
        {
            name: 'Timoteo',
            age: 16
        }
    ];

    beforeEach(function() {
        bufferTest = [];
    });

    describe('when given an empty array', function() {
        it('should return an empty array', function() {
            bufferTest.each(function(x) {
                bufferTest.push(x)
            });
            expect(bufferTest).to.eql([]);
        });
    });

    describe('when is called', function() {
        it('should loop through all elements', function() {
            people.each(function(x) {
                bufferTest.push(x.name)
            });
            expect(bufferTest).to.eql(['Marcos', 'Tomas', 'Timoteo']);
        });
    });

    describe('when is called', function() {
        it('should be accept a function as param', function() {
            people.each(function(x, i) {
                bufferTest.push(i + 1)
            });
            expect(bufferTest).to.eql([1, 2, 3]);
        });
    });
});
