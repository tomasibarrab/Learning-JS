describe('cat Method', function() {
  var sb = new StringBuilder();
  var string = '';

  beforeEach(function() {
    sb = new StringBuilder();
    string = '';
  });

  describe('string as a parameter', function() {
    it('should be empty at first', function() {
      var string = sb.cat().string();
      expect(string).toEqual('');
    });

    it('should push string values to buffer', function() {
      string = sb.cat('this').cat('is').cat('cat').string();
      expect(string).toEqual('this is cat');
    });
  });

  describe('string as parameter', function() {
    it('should store one or more strings', function() {
      string = sb.cat(['Son', 'goku', 'is', 'powerful']).cat(['!!!']).string();
      expect(string).toEqual('Son goku is powerful !!!');
    });
  });

  describe('function as a parameter', function() {
    it('should store one or more functions', function() {
      string = sb.cat('Son', function(){ return 'goku';}, 'is').cat(function() { return 'powerful !!!'; }).string();
      expect(string).toEqual('Son goku is powerful !!!');
    });
  });
});
