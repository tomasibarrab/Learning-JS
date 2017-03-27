describe('max Method', function() {
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
      expect(bufferTest.max()).toEqual(null);
    });
  });

  describe('when is called with a callback', function() {
    it('should return the maximum length string', function() {
      expect(babes.max(function(a, b){ return a.name.length - b.name.length }).name).toEqual('CarlosMarin');
    });
  });

  describe('when is called with a callback', function() {
    it('should return the maximum number', function() {
      expect(babes.max(function(a, b){ return a.age - b.age; }).name).toEqual('Ana');
    });
  });

  describe('when is called for an array of strings', function() {
    it('should return the largest string', function() {
      expect(strings.max(function(a, b){ return a.length - b.length; })).toEqual('thisisthelargest');
    });
  });

  describe('when is called for an array of numbers', function() {
    it('should return the higher number', function() {
      expect(nums.max()).toEqual(30);
    });
  });
});
