describe('take Method', function() {
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
    it('should return an empty array', function() {
      bufferTest.take(3, function(x){ return x.sex == 'm';})
        .each(function(x){ bufferTest.push(x.name)});
      expect(bufferTest).toEqual([]);
    });
  });

  describe('when is called', function() {
    it('should return the correct number of objects that satisfy the constraint', function() {
      babes.take(3, function(x){ return x.sex == 'm';})
        .each(function(x){ bufferTest.push(x.name)});
      expect(bufferTest).toEqual(['Tomas', 'Horhe', 'Arturo']);
    });
  });

  describe('when is called', function() {
    it('should return all the existing objects that satisfy the constraint', function() {
      babes.take(3, function(x){ return x.sex == 'f';})
        .each(function(x){ bufferTest.push(x.name)});
      expect(bufferTest).toEqual(['Ana']);
    });
  });

  describe('when is called', function() {
    it('should return an undefined if a property does not extist', function() {
      babes.take(3, function(x){ return x.sex == 'Chimera';})
        .each(function(x){ bufferTest.push(x.name)});
      expect(bufferTest).toEqual([]);
    });
  });

  describe('when is called', function() {
    it('should be able to read null values', function() {
      babes.take(1, function(x){ return x.sex == null;})
        .each(function(x){ bufferTest.push(x.name)});
      expect(bufferTest).toEqual(['Carlos']);
    });
  });
});
