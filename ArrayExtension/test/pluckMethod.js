describe('pluck Method', function() {
  var bufferTest = [];

  var babes = [
    {name: 'Tomas', sex: 'm', coffee: 'Mocha'},
    {name: 'Ana', sex: 'f', coffee: 'Latte'},
    {name: 'Horhe', sex: 'm', coffee: 'Chai'},
    {name: 'Carlos', sex: null, coffee: 'Expresso'},
    {name: 'Arturo', sex: 'm', coffee: 'Capuccino'}
  ];

  beforeEach(function() {
    bufferTest = [];
  });

  describe('when given an empty array', function() {
    it('should return an empty array', function() {
      bufferTest.pluck('this')
        .each(function(x){ bufferTest.push(x)});
      expect(bufferTest).toEqual([]);
    });
  });

  describe('when is called', function() {
    it('should return the correct properties', function() {
      babes.pluck('coffee')
        .each(function(x){ bufferTest.push(x)});
      expect(bufferTest).toEqual(['Mocha', 'Latte', 'Chai', 'Expresso', 'Capuccino']);
    });
  });

  describe('when is called with other property', function() {
    it('should return other properties', function() {
      babes.pluck('sex')
        .each(function(x){ bufferTest.push(x)});
      expect(bufferTest).toEqual(['m', 'f', 'm', null, 'm']);
    });
  });

  describe('when is called with a non existing value', function() {
    it('should return undefined', function() {
      babes.pluck('skill')
        .each(function(x){ bufferTest.push(x)});
      expect(bufferTest).toEqual([undefined, undefined, undefined, undefined, undefined]);
    });
  });
});
