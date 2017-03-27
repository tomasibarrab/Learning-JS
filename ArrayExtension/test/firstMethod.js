describe('first Method', function() {
  var bufferTest = [];

  var babes = [
    {name: 'Tomas', sex: 'm'},
    {name: 'Ana', sex: 'f'},
    {name: 'Horhe', sex: 'm'},
    {name: 'Carlos', sex: null},
    {name: 'Arturo', sex: 'm'}
  ];

  describe('when given an empty array', function() {
    it('should return null', function() {
      expect(bufferTest.first()).toEqual(null);
    });
  });

  describe('when is called without a constraint', function() {
    it('should return the first element', function() {
      expect(babes.first().name).toEqual('Tomas');
    });
  });

  describe('when is called with a constraint', function() {
    it('should return the first element that satisfy it', function() {
      expect(babes.first(function(x){ return x.sex === 'f'; }).name).toEqual('Ana');
    });
  });

  describe('when is called with a constraint that is not satisfied', function() {
    it('should return null', function() {
      expect(babes.first(function(x){ return x.sex === 'Chimera'; })).toEqual(null);
    });
  });
});
