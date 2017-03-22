describe('string Method', function(){
  var sb = new StringBuilder();
  var string = '';

  beforeEach(function() {
    sb = new StringBuilder();
    string = '';
  });

  describe('called with strings', function() {
    it('should return an empty string if 0 arguments are given', function() {
      string = sb.string();
      expect(string).toBe('');
    });

    it('should join the strings', function() {
      sb.cat('Cats', 'are', 'awesome!');
      string = sb.string();
      expect(string).toBe('Cats are awesome!');
    });
  });

  describe('called with tag elements', function() {
    it('should join the string and tags', function() {
      sb
        .wrap('<h2>','</h2>')
        .cat('Todo list:')
        .end()
        .cat('<ul>')
        .wrap('<li>','</li>')
        .cat('first thing to do')
        .cat('second thing to do')
        .cat('third thing to do')
        .end()
        .cat('</ul>');
      string = sb.string();
      expect(string).toEqual('<h2> Todo list: </h2> <ul> <li> first thing to do </li> <li>'+
        ' second thing to do </li> <li> third thing to do </li> </ul>');
    });
  });
});
