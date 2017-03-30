require('../src/arrayExtension.js');

var chai = require('chai');
var expect = chai.expect;

describe('last Method', function() {
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
        it('should return null', function() {
            expect(bufferTest.last()).to.eql(null);
        });
    });

    describe('when is called without a constraint', function() {
        it('should return the last element', function() {
            expect(babes.last().name).to.eql('Arturo');
        });
    });

    describe('when is called with a constraint', function() {
        it('should return the first element that satisfy it', function() {
            expect(babes.last(function(x) {
                return x.sex === 'f';
            }).name).to.eql('Ana');
        });
    });

    describe('when is called with a constraint that is not satisfied', function() {
        it('should return null', function() {
            expect(babes.last(function(x) {
                return x.sex === 'Chimera';
            })).to.eql(null);
        });
    });
});
