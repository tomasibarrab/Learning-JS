describe('count Method', function() {
  var bufferTest = [];

  var babes = [
    {name: 'Tomas', sex: 'm'},
    {name: 'Ana', sex: 'f'},
    {name: 'Horhe', sex: 'm'},
    {name: 'Carlos', sex: null},
    {name: 'Arturo', sex: 'm'}
  ];

  describe('when given an empty array', function() {
    it('should return zero', function() {
      expect(bufferTest.count()).toEqual(0);
    });
  });

  describe('when is called without a constraint', function() {
    it('should return the array length', function() {
      expect(babes.count()).toEqual(5);
    });
  });

  describe('when is called with a constraint', function() {
    it('should return the first element that satisfy it', function() {
      expect(babes.count(function(x){ return x.sex === 'm'; })).toEqual(3);
    });
  });

  describe('when is called with a constraint that is not satisfied', function() {
    it('should return zero', function() {
      expect(babes.count(function(x){ return x.sex === 'Chimera'; })).toEqual(0);
    });
  });
});
