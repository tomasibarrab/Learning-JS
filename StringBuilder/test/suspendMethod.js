describe('suspend Method', function(){
  var sb = new StringBuilder();
  var array = [];

  beforeEach(function() {
    sb = new StringBuilder();
    array = [];
  });

  describe('called with empty parameter', function() {
    it('should suspend the string then use end', function () {
        array = sb
          .wrap('<b>', '</b>')
          .suspend()
          .cat('cat')
          .cat('kitten')
          .end()
          .rep('wrap', 2)
          .string();
      expect(sb.string()).toBe('cat kitten <b> wrap </b> <b> wrap </b>');
    });
  });

  describe('called with arrays', function(){
    it('should wrap with given array parameters', function () {
      array = sb
        .wrap(['<p>', '<b>'],['</b>', '</p>'] )
        .suspend()
        .cat('plain text,')
        .end()
        .suspend()
        .end()
        .cat('bold text')
      expect(sb.string()).toBe('plain text, <p> <b> bold text </b> </p>');
    });
  });
});
