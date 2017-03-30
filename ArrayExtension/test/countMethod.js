require('../src/arrayExtension.js');

var chai = require('chai');
var expect = chai.expect;

describe('count Method', function() {
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
        it('should return zero', function() {
            expect(bufferTest.count()).to.eql(0);
        });
    });

    describe('when is called without a constraint', function() {
        it('should return the array length', function() {
            expect(babes.count()).to.eql(5);
        });
    });

    describe('when is called with a constraint', function() {
        it('should return the first element that satisfy it', function() {
            expect(babes.count(function(x) {
                return x.sex === 'm';
            })).to.eql(3);
        });
    });

    describe('when is called with a constraint that is not satisfied', function() {
        it('should return zero', function() {
            expect(babes.count(function(x) {
                return x.sex === 'Chimera';
            })).to.eql(0);
        });
    });
});
