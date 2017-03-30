(function(arrayExtension) {

    var isFunction = function(arg) {
        return typeof arg === 'function';
    }

    var isArray = function(arg) {
        return arg instanceof Array ? true : false;
    }

    var isNumber = function(arg) {
        return typeof arg === 'number'
    }

    arrayExtension.each = function(callBack) {
        var buffer = [];
        var length = this.length;
        if (!length) {
            return null;
        }
        for (var i = 0; i < length; i += 1) {
            buffer.push(callBack.call(this, this[i], i));
        }
        return buffer;
    }

    arrayExtension.where = function(spec) {
        var buffer = [];
        var length = this.length;
        for (var i = 0; i < length; i += 1) {
            if (spec.call(this, this[i])) {
                buffer.push(this[i]);
            }
        }
        return buffer;
    }

    arrayExtension.any = function(spec) {
        var length = this.length;
        var exp = (isFunction(spec)) ? spec : function compare(arg) {
            return spec === arg;
        };
        for (var i = 0; i < length; i += 1) {
            if (exp.call(this, this[i])) {
                return true;
            }
        }
        return false;
    }

    arrayExtension.select = function(spec) {
        var buffer = [];
        var length = this.length;
        for (var i = 0; i < length; i += 1) {
            buffer.push(spec.call(this, this[i]));
        }
        return buffer;
    }

    arrayExtension.take = function(howMany, spec) {
        var buffer = [];
        var count = 0;
        var length = this.length;
        var exp = (isFunction(spec)) ? spec : function compare(arg) {
            return spec === arg;
        };
        for (var i = 0; i < length; i += 1) {
            if (exp.call(this, this[i])) {
                buffer.push(this[i]);
                count = +1;
            }
        }
        return buffer;
    }

    arrayExtension.skip = function(howMany) {
        var buffer = [];
        var length = this.length;
        if (!length) {
            return null;
        } else if (isNumber(howMany)) {
            buffer = this.splice(howMany, length);
            return buffer;
        }
        return buffer;
    }

    arrayExtension.first = function(spec) {
        var length = this.length;
        if (!length) {
            return null;
        } else if (!isFunction(spec)) {
            return this[0];
        }
        for (var i = 0; i < length; i += 1) {
            if (spec.call(this, this[i])) {
                return this[i];
            }
        }
        return null;
    }

    arrayExtension.last = function(spec) {
        var length = this.length;
        if (!length) {
            return null;
        } else if (!isFunction(spec)) {
            return this[length - 1];
        }
        for (var i = length - 1; i > 0; i -= 1) {
            if (spec.call(this, this[i])) {
                return this[i];
            }
        }
        return null;
    }

    arrayExtension.count = function(spec) {
        var count = 0;
        var length = this.length;
        if (!isFunction(spec)) {
            return length;
        }
        for (var i = 0; i < length; i += 1) {
            if (spec.call(this, this[i])) {
                count++;
            }
        }
        return count;
    }

    arrayExtension.index = function(spec) {
        var length = this.length;
        var exp = (isFunction(spec)) ? spec : function compare(arg) {
            return spec === arg;
        };
        for (var i = 0; i < length; i += 1) {
            if (exp.call(this, this[i])) {
                return i;
            }
        }
        return -1;
    }

    arrayExtension.pluck = function(property) {
        var buffer = [];
        var length = this.length;
        for (i = 0; i < length; i += 1) {
            buffer.push(this[i][property]);
        }
        return buffer;
    }

    arrayExtension.sum = function(spec) {
        var sum = 0;
        var length = this.length;
        for (var i = 0; i < length; i += 1) {
            if (isFunction(spec)) {
                sum = sum + spec.call(this, this[i]);
            } else {
                sum = sum + this[i];
            }
        }
        return sum;
    }

    arrayExtension.max = function(spec) {
        var length = this.length;
        if (!length) {
            return null;
        }
        var exp = (isFunction(spec)) ? spec : function(a, b) {
            return (a - b);
        };
        var max = this.reduce(
            function(a, b) {
                var res = exp.call(this, a, b);
                var tmpMax = (res >= 0) ? a : b;
                return tmpMax;
            });
        return max;
    }

    arrayExtension.min = function(spec) {
        var length = this.length;
        if (!length) {
            return null;
        }
        var exp = (isFunction(spec)) ? spec : function(a, b) {
            return (a - b);
        };
        var min = this.reduce(
            function(a, b) {
                var res = exp.call(this, a, b);
                var tmpMin = (res >= 0) ? b : a;
                return tmpMin;
            });
        return min;
    }

    arrayExtension.flatten = function() {
        var buffer = [];
        buffer = this.reduce(function flattener(a, b) {
            return a.concat(isArray(b) ? b.reduce(flattener, []) : [b]);
        }, []);
        return buffer;
    }

}(Array.prototype));
