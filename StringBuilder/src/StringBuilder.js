var StringBuilder = function() {

  this.buffer = [];
  this.prefixBuffer = [];
  this.suffixBuffer = [];
  this.firstSB = null;

  this.isNumber = function(arg) {
    return arg.constructor === Number;
  }

  this.isArray = function(arg) {
    return arg.constructor === Array;
  }

  this.isFunction = function(arg) {
    return arg.constructor === Function;
  }

  this.isUndefined = function(arg) {
    return typeof arg === 'undefined'
  }

  this.cat = function() {
    var wrapArgs = this.prefixBuffer.concat([].slice.call(arguments).concat(this.suffixBuffer));
    this.pushToBuffer(wrapArgs);
    return this;
  }

  this.pushToBuffer = function(arg) {
    for (var i = 0; i < arg.length; i++) {
      if (this.isArray(arg[i])) {
        for (var j = 0; j < arg[i].length; j++) {
          this.buffer.push(arg[i][j].toString());
        }
      } else if (this.isFunction(arg[i])) {
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
    constraint = arguments[arguments.length -1];
    for (var i = 0; i < arguments.length-1; i++) {
      if (constraint) {
        this.cat(arguments[i]);
      }
    }
    return this;
  }

  this.each = function(args, callBack) {
    if (this.isFunction(callBack)) {
      for(var i = 0; i < args.length; i++) {
        callBack.call(this, args[i], i, args);
      }
    }
    return this;
  }

  this.when = function(exp, thenArgs, otherWiseArgs) {
    if (this.isFunction(exp)) {
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
    if (this.isUndefined(deep)) {
      this.prefixBuffer.pop();
      this.suffixBuffer.pop();
    } else if (this.isNumber(deep)) {
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
