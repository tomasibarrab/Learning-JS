describe('wrap Method', function() {
  var sb = new StringBuilder();
  var string = '';

  beforeEach(function() {
    sb = new StringBuilder();
    string = '';
  });

  describe('called with strings', function() {
    it('should wrap the strings', function() {
      string = sb.wrap('~', '~').cat('Cats are awesome!').string();
      expect(string).toEqual('~ Cats are awesome! ~');
    });
  });

  describe('called with tag elements', function() {
    it('should not wrap anything if is not asked to', function(){
      string = sb.wrap('<li>', '</li>').string();
      expect(string).toEqual('');
    });

    it('should have a prefix and suffix', function() {
      string = sb.wrap('<li>', '</li>').cat().string();
      expect(string).toEqual('<li> </li>');
    });

    it('should join the string and tags', function() {
      string = sb.cat('<ul>')
        .wrap('<li>', '</li>')
        .rep('item', 3)
        .cat('</ul>')
        .string();
      expect(string).toEqual('<ul> <li> item </li> <li> item </li> <li> item </li> <li> </ul> </li>');
    });
  });
});
