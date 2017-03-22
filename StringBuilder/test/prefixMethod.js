describe('prefix Method', function(){
  var sb = new StringBuilder();
  var array = [];

  beforeEach(function() {
    sb = new StringBuilder();
    array = [];
  });

  describe('called with empty parameter', function() {
    it('should be empty', function() {
      array = sb.prefix();
      expect(array.prefixBuffer.length).toBe(1);
    });
  });

  describe('called with params', function() {
    it('should push the params', function() {
      array = sb.prefix('<p>');
        expect(sb.prefixBuffer).toEqual(['<p>']);
        expect(sb.prefixBuffer.length).toBe(1);
        sb.prefix('<ul>');
        expect(sb.prefixBuffer.length).toBe(2);
        expect(sb.prefixBuffer[1]).toBe('<ul>');
    });
  });
});
