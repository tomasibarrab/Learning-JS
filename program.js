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


console.log(another_person.Profession);

//Reflection
typeof flight.number     //'number'
typeof flight.status     //'string'
typeof flight.arrival    //'number'
typeof flight.manifest   //'number'

flight.hasOwnProperty('number');        //true
flight.hasOwnProperty('constructor');   //false

//Enumeration
var first_name;
document.writeln();
for(first_name in another_person){
	if(typeof another_person[first_name] !== 'function'){
		document.writeln(first_name + ':' + another_person[first_name]);
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
	document.writeln(properties[i] + ':' + another_person[properties[i]]);
}

//GLOBAL ABATEMENT, BETTER NOT USE THEM

/*var MyApp{};

MyApp.properties = {
	'Name' : 'Tomas',
	'Last_name' : 'Ibarra'
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
