describe('each Method', function() {
  var bufferTest = [];

  var people = [
    {name: 'Marcos', age: 19 },
    {name: 'Tomas', age: 15 },
    {name: 'Timoteo', age: 16 }
  ];

  beforeEach(function() {
    bufferTest = [];
  });

  describe('when given an empty array', function() {
    it('should return an empty array', function() {
      bufferTest.each(function(x){ bufferTest.push(x)});
      expect(bufferTest).toEqual([]);
    });
  });

  describe('when is called', function() {
    it('should loop through all elements', function() {
      people.each(function(x){ bufferTest.push(x.name)});
      expect(bufferTest).toEqual(['Marcos', 'Tomas', 'Timoteo']);
    });
  });

  describe('when is called', function() {
    it('should be accept a function as param', function() {
      people.each(function(x, i){ bufferTest.push(i + 1)});
      expect(bufferTest).toEqual([1, 2, 3]);
    });
  });
});
