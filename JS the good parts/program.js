document.writeln('Holis Molis, Andamos aprendiendo JS :D');

//First steps
'c'+'a'+'t';           //cat
'cat'.toUpperCase();   //CAT

///////////////////////////OBJECTS/////////////////////////////
var person = {
	Name:'Harry',
	Last_name:'Johnson'
};

var flight = {

		airlane:"Volaris",
		number:"08",
		departure: {
			IATA:"SYD",
			time:"2004-09-22 14:55",
			city:"Hermosillo"
		},
		arrival: {
			IATA:"LAX",
			time:"2004-09-23 10:42",
			city:"Los Angeles"
		}
};

//Updating an object
flight.equipment = {
	model: 'Boeing 777'
};
flight.status = 'overdue';

flight.equipment  //Boeing 777
flight.status	  //overdue

//Object prototype, creando un objeto a partir de otro.
if(typeof Object.create !== 'function'){

	Object.create = function (o){
		var F = function() {};
		F.prototype = o;
		return new F();
	};
}
var another_person = Object.create(person);

//Updating a prototyped object
another_person.Name = 'Juan';
another_person.Last_name = 'Perez';
another_person.Nickname = "Pepe";

person.Profession = 'System Engineer';  //another_person.profession will be System engineer


another_person.Profession;  //System Engineer

//Reflection
typeof flight.number     //'number'
typeof flight.status     //'string'
typeof flight.arrival    //'number'
typeof flight.manifest   //'number'

flight.hasOwnProperty('number');        //true
flight.hasOwnProperty('constructor');   //false

//Enumeration
var first_name;
for(first_name in another_person){
	if(typeof another_person[first_name] !== 'function'){
		first_name + ':' + another_person[first_name];
	}
}

//Order enumeration
document.writeln();
var properties = [
	'Name',
	'Last_name',
	'Nickname',
	'Profession'
];
for (var i = 0; i < properties.length; i++) {
	properties[i] + ':' + another_person[properties[i]];
}

//GLOBAL ABATEMENT, BETTER NOT USE THEM

/*var MyApp{};

MyApp.properties = {
	'Name' : 'Tomas'
,	'Last_name' : 'Ibarra'
};

MyApp.flight = {

		airlane:"JetLine",
		number:"15",
		departure: {
			IATA:"OYE",
			time:"20015-09-25 13:00",
			city:"Hermosillo"
		},
		arrival: {
			IATA:"ZHI",
			time:"2015-09-26 15:00",
			city:"Cumpas"
		}
};*/

//FUNCTIONS

var add = function (a,b){
	return a + b;
};

//METHOD INVOCATION

/*Create myObject. It has a value and an increment
  method, the increment method takes an optional parameter.
  If the argument is not a number, then 1 is used as the default.*/
var myObject = {
 	value : 0,
 	increment : function (inc) {
 		this.value += typeof inc === 'number' ? inc : 1;
 	}
 };

 myObject.increment()
 //console.log(myObject.value); //1

 myObject.increment(2)
 //console.log(myObject.value); //3


//FUNCTION INVOCATION
var sum = add(3,4);   //sum is 7

//Argument myObject with a double method.
myObject.double = function(){
	var that = this;

	var helper = function(){
		that.value = add(that.value, that.value);
	};

	helper();  		//Invoke helper as a function
};

myObject.double(); 	//Invoke double as a method
//console.log(myObject.value);  //6

//CONSTRUCTOR INVOCATION
//Create a constructor function called Quo, it makes an object with a status property
var Quo = function(string){
	this.status = string;
};

Quo.prototype.get_status = function(){
	return this.status;
};

var myQuo = new Quo('Confused');
myQuo.get_status();  //Confused

//APPLY INVOCATION
var array = [3,4];
var suma = add.apply(null,array); //sum is 7

var statusObject = {
	status:'A-OK'
};

var stat = Quo.prototype.get_status.apply(statusObject);   //'A-OK'

//ARGUMENTS
//Making a function that adds a lot of stuffs.

var x = function(){
	var i, x = 0;
	for (i = 0; i < arguments.length; i += 1){
		x += arguments[i];
	}
	return x;
};

x(10, 20, 30, 40, 50);  //150

var add = function(a, b){
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw{
			name : 'TypeError',
			message : 'add needs numbers'
		};
	}
	return a + b;
}

var try_it = function(){
	try{
		add('a',2)                   //Makes the sum if numbers.
	}catch(e){
		e.name + ': ' + e.message    //Throws the error message.
	}
}

// try_it();

//AUGMENTING TYPES
Function.prototype.method = function (name, func) {
 	this.prototype[name] = func;
 	return this;
};

Number.method('integer', function ( ) {
	return Math[this < 0 ? 'ceiling' : 'floor'](this);
});

String.method('trim', function ( ) {
	return this.replace(/^\s+|\s+$/g, '');
});

'"' + " neat ".trim( ) + '"' //Trims spaces prints "neat"

//RECURSION
var calls = 0;
var hanoi = function (disc, src, aux, dst) {
	if (disc > 0) {
 		hanoi(disc - 1, src, dst, aux);
 		calls++;
		// document.writeln('Step ' + calls + ': Move disc ' + disc + ' from ' + src + ' to ' + dst);
		hanoi(disc - 1, aux, src, dst);
		calls-1;
	}
};

hanoi(3, 'Src', 'Aux', 'Dst');

var walk_the_DOM = function walk(node, func) {
	func(node);
	node = node.firstChild;
	while (node) {
		walk(node, func);
		node = node.nextSibling;
	}
};

var getElementsByAttribute = function (att, value) {
	var results = [];
	walk_the_DOM(document.body, function (node) {
	 	var actual = node.nodeType === 1 && node.getAttribute(att);

	 	if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
	 		results.push(node);
	 	}
	});
  return results;
};


// Scope
var foo = function (  ) {
  var a = 3, b = 5;

  var bar = function (  ) {
    var b = 7, c = 11;  	// At this point, a is 3, b is 7, and c is 11
    a += b + c; 					// At this point, a is 21, b is 7, and c is 11
  };											// At this point, a is 3, b is 5, and c is not defined
  bar(  );									// At this point, a is 21, b is 5
};

// CLOSURE
var myObject = (function () {
  var value = 0;

  return {
    increment: function (inc) {
      value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function (  ) {
      return value;
    }
  };
}());

// Create a maker function called quo. It makes an
// object with a get_status method and a private
// status property.
var quo = function (status) {
	return {
  	get_status: function (  ) {
    	return status;
    }
  };
};

// Make an instance of quo.
var myQuo = quo('Amazed AF');
myQuo.get_status(  ); // Amazed AF


// Define a function that sets a DOM node's color
// to yellow and then fades it to white.

var fade = function (node) {
	var level = 1;
	var step = function (  ) {
  	var hex = level.toString(16);
  	node.style.backgroundColor = '#FFFF' + hex + hex;
  	if (level < 15) {
    	level += 1;
    	setTimeout(step, 100);
  	}
	};
  setTimeout(step, 100);
};
// fade(document.body);  // Makes a fade from yellow to white

// MODULES
String.method('deentityify', function (  ) {

// The entity table. It maps entity names to
// characters.

	var entity = {
    quot: '"',
    lt:   '<',
    gt:   '>'
  };

	// Return the deentityify method.

	return function (  ) {

	// This is the deentityify method. It calls the string
	// replace method, looking for substrings that start
	// with '&' and end with ';'. If the characters in
	// between are in the entity table, then replace the
	// entity with the character from the table. It uses
	// a regular expression (Chapter 7).

	return this.replace(/&([^&;]+);/g,
    function (a, b) {
      var r = entity[b];
      return typeof r === 'string' ? r : a;
    	}
		);
  };
}(  ));

'&lt;&quot;&gt;'.deentityify(  );  // <">

var serial_maker = function (  ) {

	// Produce an object that produces unique strings. A
	// unique string is made up of two parts: a prefix
	// and a sequence number. The object comes with
	// methods for setting the prefix and sequence
	// number, and a gensym method that produces unique
	// strings.

  var prefix = '';
  var seq = 0;
  return {
  	set_prefix: function (p) {
    	prefix = String(p);
  	},
  	set_seq: function (s) {
    	seq = s;
  	},
  	gensym: function ( ) {
    	var result = prefix + seq;
    	seq += 1;
    	return result;
  	}
  };
};
var seqer = serial_maker( );
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym( ); // "Q1000"

// CURRY
Function.method('curry', function (  ) {
  var slice = Array.prototype.slice,
  args = slice.apply(arguments),
  that = this;
  return function (  ) {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});

var add1 = add.curry(1);
add1(6);  // 7


// MEMOIZATION
//General memoized function
var memoizer = function (memo, formula) {
  var recur = function (n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = formula(recur, n);
      memo[n] = result;
    }
    return result;
  };
  return recur;
};

// Fibonacci implementation
var fibonacci = memoizer([0, 1], function (recur, n) {
  return recur(n-1) + recur(n-2);
});

// Factorial implementation
var factorial = memoizer([1, 1], function (recur, n) {
  return n * recur(n-1);
});
