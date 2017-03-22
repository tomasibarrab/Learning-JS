describe('wrap Method', function(){
  var sb = new StringBuilder();
  var array = [];

  beforeEach(function() {
    sb = new StringBuilder();
    array = [];
  });

  describe('called with strings', function() {
    it('should wrap the strings', function() {
      array = sb.wrap('~', '~').cat('Cats are awesome!').string();
      expect(array).toEqual('~ Cats are awesome! ~');
    });
  });

  describe('called with tag elements', function() {
    it('should not wrap anything if is not asked to', function(){
      array = sb.wrap('<li>', '</li>');
      expect(array.buffer.length).toEqual(0);
    });

    it('should have a prefix and suffix', function(){
      array = sb.wrap('<li>', '</li>').cat();
      expect(array.buffer.length).toEqual(2);
    });

    it('should join the string and tags', function() {
      array = sb.cat('<ul>')
        .wrap('<li>', '</li>')
        .rep('item', 3)
        .cat('</ul>')
        .string();
      expect(array).toEqual('<ul> <li> item </li> <li> item </li> <li> item </li> <li> </ul> </li>');
    });
  });
});
