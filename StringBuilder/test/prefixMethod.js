describe('prefix Method', function() {
  var sb = new StringBuilder();
  var string = '';

  beforeEach(function() {
    sb = new StringBuilder();
    string = '';
  });

  describe('called with empty parameter', function() {
    it('should be empty', function() {
      string = sb.prefix().string();
      expect(string).toEqual('');
    });
  });

  describe('called with params', function() {
    it('should push the params', function() {
      string = sb.prefix('<p>').prefix('<ul>').prefix('<li>').cat('prefixed').string();
      expect(string).toEqual('<p> <ul> <li> prefixed');
    });
  });
});
