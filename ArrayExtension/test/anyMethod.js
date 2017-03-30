require('../src/arrayExtension.js');

var chai = require('chai');
var expect = chai.expect;

describe('any Method', function() {
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
                var skills = dev.skills.any(function(skill) {
                    return skill === 'OOP';
                });
                return skills.length == 0;
            }).each(function(x) {
                bufferTest.push(x.name)
            });
          expect(bufferTest).to.eql([]);
        });
    });

    describe('when is called', function() {
        it('should return the correct object', function() {
            people.where(function(dev) {
                return !dev.skills.any(function(skill) {
                    return skill == 'C#'
                });
            }).each(function(x) {
                bufferTest.push(x.name)
            });
            expect(bufferTest).to.eql(['Tomas']);
        });
    });

    describe('when is called', function() {
        it('should return an empty array if all objects satisfy the constraint', function() {
            people.where(function(dev) {
                return !dev.skills.any('OOP');
            }).each(function(x) {
                bufferTest.push(x.name)
            });
            expect(bufferTest).to.eql([]);
        });
    });
});
