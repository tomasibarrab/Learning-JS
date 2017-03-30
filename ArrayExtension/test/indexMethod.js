require('../src/arrayExtension.js');

var chai = require('chai');
var expect = chai.expect;

describe('index Method', function() {
    var bufferTest = [];

    var babes = [{
            name: 'Tomas',
            sex: 'm'
        },
        {
            name: 'Ana',
            sex: 'f'
        },
        {
            name: 'Horhe',
            sex: 'm'
        },
        {
            name: 'Carlos',
            sex: null
        },
        {
            name: 'Arturo',
            sex: 'm'
        }
    ];

    describe('when given an empty array', function() {
        it('should return -1', function() {
            expect(bufferTest.index()).to.eql(-1);
        });
    });

    describe('when is called with a not satisfied constraint', function() {
        it('should return -1', function() {
            expect(babes.index(function(x) {
                return x.sex === 'Chimera';
            })).to.eql(-1);
        });
    });

    describe('when is called with a satisfied constraint', function() {
        it('should return correct index number', function() {
            expect(babes.index(function(x) {
                return x.name === 'Carlos';
            })).to.eql(3);
        });
    });

    describe('when is called with a number', function() {
        it('should return the correct index number', function() {
            expect([1, 4, 8, 12, 16, 20].index(20)).to.eql(5);
        });
    });
});
