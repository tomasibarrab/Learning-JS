describe('suffix Method', function(){
  var sb = new StringBuilder();
  var array = [];

  beforeEach(function() {
    sb = new StringBuilder();
    array = [];
  });

  describe('called with empty parameter', function() {
    it('should be empty', function() {
      array = sb.suffix();
      expect(array.suffixBuffer.length).toBe(1);
    });
  });

  describe('called with params', function() {
    it('should push the params', function() {
      array = sb.suffix('<p>');
        expect(sb.suffixBuffer).toEqual(['<p>']);
        expect(sb.suffixBuffer.length).toBe(1);
        sb.suffix('<ul>');
        expect(sb.suffixBuffer.length).toBe(2);
        expect(sb.suffixBuffer[0]).toBe('<ul>');
    });
  });
});
