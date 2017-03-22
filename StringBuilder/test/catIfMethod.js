describe('catIf Method', function(){
  var sb = new StringBuilder();
  var array = [];

  beforeEach(function() {
    sb = new StringBuilder();
    array = [];
  });

  describe('constraints', function() {
    var male = 'm', female = 'f';
    it('should not push values if constraint is not satified', function() {
      array = sb.catIf('Tomas is an alpha male', male === 'f');
      expect(array.buffer.length).toBe(0);
    });

    it('should read constraints', function() {
      array = sb.cat('Tomas is').catIf('male', male === 'm').cat(', and Isabel is').catIf('female', female ==='f');
      expect(array.buffer).toEqual(['Tomas is', 'male', ', and Isabel is', 'female']);
    });
  });
});
