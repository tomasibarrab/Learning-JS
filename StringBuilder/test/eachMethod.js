describe('each Method', function(){
  var sb = new StringBuilder();
  var array = [];

  var cats = [
    { name: 'Skip', age: 2 },
    { name: 'Sparky', age: 7 },
    { name: 'Mary', age: 20 }
  ];

  beforeEach(function() {
    sb = new StringBuilder();
    array = [];
  });

  describe('callback as a parameter', function() {
    it('should accept a callback function', function() {
      var array = sb
      .each(cats, function(value, index, theCats){
      	this
      		.cat('<tr>')
      		.cat('<td>', value.name, '</td>')
      		.cat('<td>', value.age, '</td>')
      		.cat('</tr>');
      });
      expect(array.buffer).toContain('Skip', 2, 'Sparky', 7, 'Mary', 20);
      expect(array.buffer.length).toBe(24);
    });
  });
});
