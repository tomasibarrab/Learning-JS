describe('sum Method', function() {
  var bufferTest = [];
  var nums = [1, 2, 3, 4, 5, 20, 30];
  var strings = ['This', 'is', 'awesome', '!'];

  describe('when given an empty array', function() {
    it('should return 0', function() {
      expect(bufferTest.sum()).toEqual(0);
    });
  });

  describe('when is called without a contraint', function() {
    it('should return the exat sum', function() {
      expect(nums.sum()).toEqual(65);
    });
  });

  describe('when is called with a callback', function() {
    it('should return correct value', function() {
      expect(nums.sum(function(x) { return x * 2; })).toEqual(130);
    });
  });

  describe('when is called with an array of strings', function() {
    it('should return the correct index number', function() {
      expect(strings.sum()).toEqual('0Thisisawesome!');
    });
  });
});
