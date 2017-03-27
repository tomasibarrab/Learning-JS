describe('flatten Method', function() {
  var bufferTest = [];
  var nums = [1,2,3,[4,5,[6, 7, 8], 9, 10, 11, 12, 13, 14], 15, 16];
  var strings = [['Yo dawg!', ['For', ['me', 'this', 'is'], 'awesome', 'dude!']]];

  describe('when given an empty array', function() {
    it('should return an empty array', function() {
      expect(bufferTest.flatten()).toEqual([]);
    });
  });

  describe('when is called with a multidimentional array of numbers', function() {
    it('should return the flattened array', function() {
      expect(nums.flatten()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    });
  });

  describe('when is called with a multidimentional array of strings', function() {
    it('should return the flattened array', function() {
      expect(strings.flatten()).toEqual(['Yo dawg!', 'For', 'me', 'this', 'is', 'awesome', 'dude!']);
    });
  });
});
