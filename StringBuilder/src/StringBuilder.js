var isNumber = function(arg) {
  return typeof arg === 'number'
}

var isArray = function(arg) {
  return typeof arg === 'object'
}

var isFunction = function(arg) {
  return typeof arg === 'function'
}

var isUndefined = function(arg) {
  return typeof arg === 'undefined'
}

var StringBuilder = function() {

  this.buffer = [];
  this.prefixBuffer = [];
  this.suffixBuffer = [];

  this.cat = function() {
    var wrapArgs = this.prefixBuffer.concat([].slice.call(arguments).concat(this.suffixBuffer));
    this.pushToBuffer(wrapArgs);
    return this;
  }

  this.pushToBuffer = function(arg) {
    for (var i = 0; i < arg.length; i++) {
      if (isArray(arg[i])) {
        this.pushToBuffer(arg[i]);
      } else if (isFunction(arg[i])) {
        this.buffer.push(arg[i](arguments).toString());
      } else {
        this.buffer.push(arg[i].toString());
      }
    }
    return this;
  }

  this.rep = function(string, num) {
    for (var i = 0; i < num; i++) {
      this.cat(string);
    }
    return this ;
  }

  this.catIf = function() {
    constraint = arguments[arguments.length-1];
    if(constraint) {
      for (var i = 0; i < arguments.length-1; i++) {
        this.cat(arguments[i]);
      }
    }
    return this;
  }

  this.each = function(args, callBack) {
    if (isFunction(callBack)) {
      for(var i = 0; i < args.length; i++) {
        callBack.call(this, args[i], i, args);
      }
    }
    return this;
  }

  this.when = function(exp, thenArgs, otherWiseArgs) {
    if (isFunction(exp)) {
      var exp_result = exp.call(this);
    } else {
      var exp_result = exp;
    }

    if (exp_result) {
      return this.cat(thenArgs);
    } else {
      return this.cat(otherWiseArgs);
    }
  }

  this.wrap = function(pre, suf) {
    this.prefixBuffer.push(pre);
    this.suffixBuffer.splice(0,0,suf);
    return this;
  }

  this.prefix = function(pre) {
    this.wrap.call(this, pre, []);
    return this;
  }

  this.suffix = function(suf) {
    this.wrap.call(this, [], suf);
    return this;
  }

  this.end = function(deep) {
    if (isUndefined(deep)) {
      this.prefixBuffer.pop();
      this.suffixBuffer.pop();
    } else if (isNumber(deep)) {
      for (var i = 0; i < deep; i++) {
        this.prefixBuffer.pop();
        this.suffixBuffer.pop();
      }
    }
    return this.firstSB || this;
  }

  this.suspend = function() {
    var temporalSB = new StringBuilder();
    temporalSB.buffer = this.buffer;
    temporalSB.firstSB = this;
    return temporalSB;
  }

  this.string = function() {
    return this.buffer.join(' ');
  }
}
