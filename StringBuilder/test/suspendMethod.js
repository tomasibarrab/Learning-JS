describe('suspend Method', function() {
  var sb = new StringBuilder();
  var string = '';

  beforeEach(function() {
    sb = new StringBuilder();
    string = '';
  });

  describe('called with empty parameter', function() {
    it('should suspend the string then use end', function () {
      string = sb
        .wrap('<b>', '</b>')
        .suspend()
        .cat('cat')
        .cat('kitten')
        .end()
        .rep('wrap', 2)
        .string();
      expect(string).toEqual('cat kitten <b> wrap </b> <b> wrap </b>');
    });
  });

  describe('called with strings', function() {
    it('should wrap with given string parameters', function () {
      string = sb
        .wrap(['<p>', '<b>'],['</b>', '</p>'] )
        .suspend()
        .cat('plain text,')
        .end()
        .suspend()
        .end()
        .cat('bold text')
        .string();
      expect(string).toEqual('plain text, <p> <b> bold text </b> </p>');
    });
  });
});
