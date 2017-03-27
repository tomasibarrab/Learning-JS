describe('skip Method', function() {
  var bufferTest = [];

  var babes = [
    {name: 'Tomas', sex: 'm'},
    {name: 'Ana', sex: 'f'},
    {name: 'Horhe', sex: 'm'},
    {name: 'Carlos', sex: null},
    {name: 'Arturo', sex: 'm'}
  ];

  beforeEach(function() {
    bufferTest = [];
  });

  describe('when given an empty array', function() {
    it('should return null', function() {
      expect(bufferTest.skip(3)).toEqual(null);
    });
  });

  describe('when is called', function() {
    it('should skip the correct number of objects', function() {
      babes.skip(4)
        .each(function(x){ bufferTest.push(x.name)});
      expect(bufferTest).toEqual(['Arturo']);
    });
  });

  describe('when is called with a number bigger than the number of elements', function() {
    it('should return an empty array', function() {
      babes.skip(10)
        .each(function(x){ bufferTest.push(x.name)});
      expect(bufferTest).toEqual([]);
    });
  });
});
