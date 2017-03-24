describe('suffix Method', function() {
  var sb = new StringBuilder();
  var string = '';

  beforeEach(function() {
    sb = new StringBuilder();
    string = '';
  });

  describe('called with empty parameter', function() {
    it('should be empty', function() {
      string = sb.suffix().string();
      expect(string).toBe('');
    });
  });

  describe('called with params', function() {
    it('should push the params', function() {
      string = sb.suffix('</p>').suffix('</ul>').suffix('</li>').cat('suffixed').string();
      expect(string).toEqual('suffixed </li> </ul> </p>');
    });
  });
});
