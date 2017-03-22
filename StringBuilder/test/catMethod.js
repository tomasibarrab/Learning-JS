describe('cat Method', function(){
  var sb = new StringBuilder();
  var array = [];

  beforeEach(function() {
    sb = new StringBuilder();
    array = [];
  });

  describe('string as a parameter', function() {
    it('should be empty at first', function() {
      var array = sb.cat();
      expect(array.buffer.length).toBe(0);
    });

    it('should push string values to buffer', function(){
      array = sb.cat('this').cat('is').cat('cat');
      expect(array.buffer).toEqual(['this', 'is', 'cat']);
      expect(array.buffer.length).toBe(3);
    });
  });

  describe('array as parameter', function() {
    it('should store one or more arrays', function(){
      array = sb.cat(['Son', 'goku', 'is', 'powerful']).cat(['!']);
      expect(array.buffer).toEqual(['Son', 'goku', 'is', 'powerful','!']);
      expect(array.buffer.length).toBe(5);
    });
  });

  describe('function as a parameter', function() {
    it('should store one or more functions', function(){
      array = sb.cat('Son', function(){ return 'goku';}, 'is').cat(function(){return 'powerful!';});
      expect(array.buffer).toEqual(['Son', 'goku', 'is', 'powerful!']);
      expect(array.buffer.length).toBe(4);
    });
  });
});
