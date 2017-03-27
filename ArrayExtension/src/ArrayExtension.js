(function (ArrayExtension) {

  var isFunction = function(arg) {
    return typeof arg === 'function'
  }

  var isArray = function(arg) {
    return arg instanceof Array ? true : false;
  }

  var isNumber = function(arg) {
    return typeof arg === 'number'
  }

  var nonFunction = function(arg) {
    function compare(elem) {
      return arg === elem;
    }
    return compare;
  }

  var substractFunction = function(a, b) {
    return (a - b);
  }

  ArrayExtension.each = function(callBack) {
    var buffer = [];
    if (!this.length) {
      return null;
    }
    for (var i = 0; i < this.length; i++) {
      buffer.push(callBack.call(this, this[i], i));
    }
    return buffer;
  }

  ArrayExtension.where = function(spec) {
    var buffer = [];
    for (var i = 0; i < this.length; i++) {
      if (spec.call(this, this[i])) {
        buffer.push(this[i]);
      }
    }
    return buffer;
  }

  ArrayExtension.any = function(spec) {
    var exp = (isFunction(spec)) ? spec : nonFunction(spec);
    for (var i = 0; i < this.length; i++) {
      if (exp.call(this, this[i])) {
        return true;
      }
    }
    return false;
  }

  ArrayExtension.select = function(spec) {
    var buffer = [];
    for (var i = 0; i < this.length; i++) {
      buffer.push(spec.call(this, this[i]));
    }
    return buffer;
  }

  ArrayExtension.take = function(howMany, spec) {
    var buffer = [];
    var count = 0;
    var exp = (isFunction(spec)) ? spec : nonFunction(howMany);
    for (var i = 0; i < this.length; i++) {
      if (count >= howMany) {
        return buffer;
      }
      if (exp.call(this, this[i])) {
        buffer.push(this[i]);
        count++;
      }
    }
    return buffer;
  }

  ArrayExtension.skip = function(howMany) {
    var buffer = [];
    if (!this.length) {
      return null;
    } else if (isNumber(howMany)) {
      buffer = this.splice(howMany, this.length);
      return buffer;
    }
    return buffer;
  }

  ArrayExtension.first = function(spec) {
    if (!this.length) {
      return null;
    } else if (!isFunction(spec)) {
      return this[0];
    }
    for (var i = 0; i < this.length; i++) {
      if (spec.call(this, this[i])) {
        return this[i];
      }
    }
    return null;
  }

  ArrayExtension.last = function(spec) {
    if (!this.length) {
      return null;
    } else if (!isFunction(spec)) {
      return this[this.length-1];
    }
    for (var i = this.length-1 ; i > 0; i--) {
      if (spec.call(this, this[i])) {
      return this[i];
      }
    }
    return null;
  }

  ArrayExtension.count = function(spec) {
    var count = 0;
    if (!isFunction(spec)) {
      return this.length;
    }
    for (var i = 0; i < this.length; i++) {
      if (spec.call(this, this[i])) {
        count++;
      }
    }
    return count;
  }

  ArrayExtension.index = function(spec) {
    var exp = (isFunction(spec)) ? spec : nonFunction(spec);
    for (var i = 0; i < this.length; i++) {
      if (exp.call(this, this[i])) {
        return i;
      }
    }
    return -1;
  }

  ArrayExtension.pluck = function(property) {
    var buffer = [];
    for (i = 0; i < this.length; i++) {
      buffer.push(this[i][property]);
    }
    return buffer;
  }

  ArrayExtension.sum = function(spec) {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      if (isFunction(spec)) {
        sum = sum + spec.call(this, this[i]);
      } else {
        sum = sum + this[i];
      }
    }
    return sum;
  }

  ArrayExtension.max = function(spec) {
    if (!this.length) {
      return null;
    }
    var exp = (isFunction(spec)) ? spec : function(a, b) {return (a - b)};
    var max = this.reduce(
      function (a, b) {
        var res = exp.call(this, a, b);
        var tmpMax = (res >= 0) ? a : b;
        return tmpMax;
      });
    return max;
  }

  ArrayExtension.min = function(spec) {
    if (!this.length) {
      return null;
    }
    var exp = (isFunction(spec)) ? spec : function(a, b) {return (a - b)};
    var min = this.reduce(
      function (a, b) {
        var res = exp.call(this, a, b);
        var tmpMin = (res >= 0) ? b : a;
        return tmpMin;
      });
    return min;
  }

  ArrayExtension.flatten = function() {
    var buffer = [];
    buffer = this.reduce(function flattener(a, b) {
      return a.concat(isArray(b) ? b.reduce(flattener, []) : [b]);
    }, []);
    return buffer;
  }

}(Array.prototype));
