describe('when Method', function(){
  var sb = new StringBuilder();
  var array = [];

  beforeEach(function() {
    sb = new StringBuilder();
    array = [];
  });

  var cats = [
    { name: 'Skip', age: 2 },
    { name: 'Sparky', age: 7 },
    { name: 'Mary', age: 20 }
  ];

  describe('constraints', function() {
    it('should read constraints', function() {
      array = sb.each(cats, function(cat){
    		this.when(cat.age > 7, function(){
    		  return cat.name + ' is an old cat';
    		},
    		  [cat.name, 'is a young cat']);
    	})
      expect(sb.string()).toBe('Skip is a young cat Sparky is a young cat Mary is an old cat');
    });

    it('should return the otherWiseArgs value if constraint is not staisfied', function() {
      array = sb.each(cats, function(cat){
      	this.when(cat.work > 7, function(){
      	  return cat.name + ' is an old cat';
      	},
      	  [cat.name, 'is a young cat']);
      })
      expect(sb.string()).toBe('Skip is a young cat Sparky is a young cat Mary is a young cat');
    });
  });
});
