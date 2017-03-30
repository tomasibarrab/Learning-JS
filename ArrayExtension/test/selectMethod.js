require('../src/arrayExtension.js');

var chai = require('chai');
var expect = chai.expect;

describe('select Method', function() {
    var bufferTest = [];

    var people = [{
            name: 'Marcos',
            age: 19,
            skills: ['C#', 'Asp.Net', 'OOP']
        },
        {
            name: 'Tomas',
            age: 15,
            skills: ['Ruby', 'JS', 'OOP']
        },
        {
            name: 'Timoteo',
            age: 16,
            skills: ['C#', 'Asp.Net', 'OOP']
        }
    ];

    beforeEach(function() {
        bufferTest = [];
    });

    describe('when given an empty array', function() {
        it('should return an empty array', function() {
            bufferTest.where(function(dev) {
                    return !dev.skills.any('JS');
                })
                .select(function(dev) {
                    return dev.name;
                })
                .each(function(x) {
                    bufferTest.push(x.name)
                });
            expect(bufferTest).to.eql([]);
        });
    });

    describe('when is called', function() {
        it('should select the correct property', function() {
            people.where(function(dev) {
                    return !dev.skills.any('JS');
                })
                .select(function(dev) {
                    return dev.name;
                })
                .each(function(x) {
                    bufferTest.push(x)
                });
            expect(bufferTest).to.eql(['Marcos', 'Timoteo']);
        });
    });

    describe('when is called', function() {
        it('should be able to select another property', function() {
            people.where(function(dev) {
                    return !dev.skills.any('JS');
                })
                .select(function(dev) {
                    return dev.age;
                })
                .each(function(x) {
                    bufferTest.push(x)
                });
            expect(bufferTest).to.eql([19, 16]);
        });
    });

    describe('when is called', function() {
        it('should return an undefined if a property does not extist', function() {
            people.where(function(dev) {
                    return !dev.skills.any('JS');
                })
                .select(function(dev) {
                    return dev.time;
                })
                .each(function(x) {
                    bufferTest.push(x)
                });
            expect(bufferTest).to.eql([undefined, undefined]);
        });
    });
});
