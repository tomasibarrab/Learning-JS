describe('rep Method', function(){
  var sb = new StringBuilder();
  var array = [];

  beforeEach(function() {
    sb = new StringBuilder();
    array = [];
  });

  describe('number of iterations', function() {
    it('should not push anything if the parameter is 0', function() {
      array = sb.rep('Tomas', 0);
      expect(array.buffer.length).toBe(0);
    });

    it('should not push anything if the parameter is 0', function() {
      array = sb.rep('Tomas', 5);
      expect(array.buffer).toEqual(['Tomas','Tomas','Tomas','Tomas','Tomas'])
      expect(array.buffer.length).toBe(5);
    });
  });
});
