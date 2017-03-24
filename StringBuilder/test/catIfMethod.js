describe('catIf Method', function() {
  var sb = new StringBuilder();
  var string = '';

  beforeEach(function() {
    sb = new StringBuilder();
    string = '';
  });

  describe('constraints', function() {
    var male = 'm', female = 'f';
    it('should not push values if constraint is not satified', function() {
      string = sb.catIf('Tomas is an alpha male', male === 'f').string();
      expect(string).toEqual('');
    });

    it('should read constraints', function() {
      string = sb.cat('Tomas is').catIf('male', male === 'm').cat('and Isabel is').catIf('female', female ==='f').string();
      expect(string).toEqual('Tomas is male and Isabel is female');
    });
  });
});
