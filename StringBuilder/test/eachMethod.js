describe('each Method', function() {
  var sb = new StringBuilder();
  var string = '';

  var cats = [
    { name: 'Skip', age: 2 },
    { name: 'Sparky', age: 7 },
    { name: 'Mary', age: 20 }
  ];

  beforeEach(function() {
    sb = new StringBuilder();
    string = '';
  });

  describe('callback as a parameter', function() {
    it('should accept a callback function', function() {
      var string = sb
        .each(cats, function(value, index, theCats) {
        	this
          .cat('<tr>')
          .cat('<td>', value.name, '</td>')
          .cat('<td>', value.age, '</td>')
          .cat('</tr>')
        }).string();
      expect(string).toContain('Skip', 2, 'Sparky', 7, 'Mary', 20);
    });
  });
});
