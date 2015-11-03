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

try_it();

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
		document.writeln('Step ' + calls + ': Move disc ' + disc + ' from ' + src + ' to ' + dst);
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
