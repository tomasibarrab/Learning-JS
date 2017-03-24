describe('rep Method', function() {
  var sb = new StringBuilder();
  var string = '';

  beforeEach(function() {
    sb = new StringBuilder();
    string = '';
  });

  describe('number of iterations', function() {
    it('should not push anything if the parameter is 0', function() {
      string = sb.rep('Tomas', 0).string();
      expect(string).toEqual('');
    });

    it('should push the correct repetitions', function() {
      string = sb.rep('Tomas', 5).string();
      expect(string).toEqual('Tomas Tomas Tomas Tomas Tomas');
    });
  });

  describe('number of iterations with array', function() {
    it('should not push anything if the parameter is [0]', function() {
      string = sb.rep('Tomas', [0]).string();
      expect(string).toEqual('');
    });

    it('should push the correct repetitions with array as param', function() {
      string = sb.rep('Tomas', [5]).string();
      expect(string).toEqual('Tomas Tomas Tomas Tomas Tomas');
    });
  });
});
