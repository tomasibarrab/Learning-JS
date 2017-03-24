describe('end Method', function() {
  var sb = new StringBuilder();
  var string = '';

  beforeEach(function() {
    sb = new StringBuilder();
    string = '';
  });

  describe('called to an empty buffer', function() {
    it('should be empty', function() {
      string = sb.end().string();
      expect(string).toEqual('');
      string = sb.end(3).string();
      expect(string).toEqual('');
    });
  });

  describe('end with params', function() {
    it('should end correctly', function() {
      string = sb
        .suffix('this')
        .suffix('is')
        .suffix('gone')
        .end(3)
        .suffix('this')
        .suffix('too')
        .end(2)
        .string();
      expect(string).toEqual('');
    });
  });

  describe('end prefix with values', function() {
    it('should show the correct prefix', function() {
      string = sb.prefix('deleted').end().prefix('pushed').cat('this').string();
      expect(string).toEqual('pushed this');
    });
  });

  describe('end suffix with values', function() {
    it('should show the correct suffix', function() {
      string = sb.suffix('deleted').end().suffix('pushed').cat('this').string();
      expect(string).toEqual('this pushed');
    });
  });
});
