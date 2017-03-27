describe('min Method', function() {
  var bufferTest = [];
  var nums = [1, 2, 3, 4, 5, 20, 30];
  var strings = ['thisisthelargest', 'This', 'is', 'awesome'];

  var babes = [
    {name: 'Tomas', sex: 'm', age: 24},
    {name: 'Ana', sex: 'f', age: 45},
    {name: 'Horhe', sex: 'm', age: 26},
    {name: 'CarlosMarin', sex: null, age: 30},
    {name: 'Arturo', sex: 'm', age: 5}
  ];

  describe('when given an empty array', function() {
    it('should return null', function() {
      expect(bufferTest.min()).toEqual(null);
    });
  });

  describe('when is called with a callback', function() {
    it('should return the minimum length string', function() {
      expect(babes.min(function(a, b){ return a.name.length - b.name.length }).name).toEqual('Ana');
    });
  });

  describe('when is called with a callback', function() {
    it('should return the minimum number', function() {
      expect(babes.min(function(a, b){ return a.age - b.age; }).name).toEqual('Arturo');
    });
  });

  describe('when is called for an array of strings', function() {
    it('should return the shortest string', function() {
      expect(strings.min(function(a, b){ return a.length - b.length; })).toEqual('is');
    });
  });

  describe('when is called for an array of numbers', function() {
    it('should return the lowest number', function() {
      expect(nums.min()).toEqual(1);
    });
  });
});
