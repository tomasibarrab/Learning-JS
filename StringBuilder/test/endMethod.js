describe('end Method', function(){
  var sb = new StringBuilder();
  var array = [];

  beforeEach(function() {
    sb = new StringBuilder();
    array = [];
  });

  describe('called to an empty buffer', function() {
    it('should be empty', function() {
      array = sb.end();
      expect(array.prefixBuffer.length).toEqual(0);
      expect(array.suffixBuffer.length).toEqual(0);
      array = sb.end(3);
      expect(array.prefixBuffer.length).toEqual(0);
      expect(array.suffixBuffer.length).toEqual(0);
    });
  });

  describe('end with params', function() {
    it('should end correctly', function() {
      array = sb
        .suffix('this')
        .suffix('is')
        .suffix('gone')
        .end(3)
        .suffix('this')
        .suffix('too')
        .end(2)
      expect(array.prefixBuffer.length).toEqual(0);
      expect(array.suffixBuffer.length).toBe(0);
    });
  });

  describe('end prefix with values', function() {
    it('should show the correct prefix', function() {
      array = sb.prefix('deleted').end().prefix('pushed');
      expect(array.prefixBuffer).toEqual(['pushed']);
      expect(array.suffixBuffer.length).toEqual(1);
    });
  });

  describe('end suffix with values', function() {
    it('should show the correct suffix', function() {
      array = sb.suffix('deleted').end().suffix('pushed');
      expect(array.prefixBuffer.length).toEqual(1);
      expect(array.suffixBuffer).toEqual(['pushed']);
    });
  });
});
