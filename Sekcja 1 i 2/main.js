// NOTATKI Z KURSU

// Sekcja 2, Lekcja 17: "Statments and Expressions"

	// function statement:
	// wykonuję akcję
		function someFun(par) {
			//code
		}

	// function expresions:
	// produkuję wartość
		var someFun = function(par) {
			//code
		}

	// Przykłady:

	// Expressions: 
		3+4;
		var x = 3;

	// Statements:
		if (x == 5) {
			// do something
		}

// Sekcja 2, lekcja 18: "Arrays"

	// sposób utworzenia tablicy 
		var array = new Array("chuj", 232, "ds");

		var table = ["Karol", "Karolina"];

		table.indexOf("Karol");
		// zwróci idnex elementu "Karol", jeśli takiego elementu nie ma w tablicy, to zwróci -1

// Sekcja 2, lekcja 19: "Objects"

	var john = {
		name: "John",
		lastName: "Smith",
		yearOfBirth: 1990,
		job: "teacher",
		isMarried: false
	}

	console.log(john.lastName);
	console.log(john['lastName']);

	var xyz = 'job';
	// wyświetli 'teacher'.
	console.log(john[xyz]);

	// sposób przypisania wartości do obiektu

	john.lastName = "Miller";
	john['job'] = "programmer";

	console.log(john);

	// utworzymy nowy obiekt inną metodą

	var jane = new Object();
	jane.name = 'Jane';
	jane.lastName = 'Smith';
	jane['yearOfBirth'] = 1999;
	jane['job'] = 'cop';

	// metody obiektów

	var john = {
		name: "John",
		lastName: "Smith",
		yearOfBirth: 1990,
		job: "teacher",
		isMarried: false,
		family: ['Jane','Mark', 'Bob'],
		// metoda
		calculateAge: function(yearOfBirth) {
			return 2016 - yearOfBirth;
		}
	};

	console.log(john.calculateAge(1990));


	// teraz pobierzemy wartośc wieku z obiektu
	var john = {
		name: "John",
		lastName: "Smith",
		yearOfBirth: 1990,
		job: "teacher",
		isMarried: false,
		family: ['Jane','Mark', 'Bob'],
		// metoda
		calculateAge: function() {
			return 2016 - this.yearOfBirth;
		}
	};
	// i teraz w cosnoli bedzie zwykle wywołanie
	console.log(john.calculateAge());

	var age = john.calculateAge();
	// dodamy wiek do naszego obiektu
	john.age = age;


	// teraz dodamy wiek bezpośrednio w metodzie obiektu
	var john = {
		name: "John",
		lastName: "Smith",
		yearOfBirth: 1990,
		job: "teacher",
		isMarried: false,
		family: ['Jane','Mark', 'Bob'],
		// metoda
		calculateAge: function() {
			// return 2016 - this.yearOfBirth;
			this.age = 2016 - this.yearOfBirth;
		}
	};

	// wywołamy metodę
	john.calculateAge();
	console.log(john);


// Sekcja 2, lekcja 21: "Loops"

var names = ['karol','tomek','lukasz'];

// for loop
for (var i = 0; i<names.length; i++) {
	console.log(names[i]);
}

// while loop
var i = 0;
while ( i < names.length ) {
	console.log(names[i]);
	i++;
}

// break and continue

for (var i = 1; i<=5; i++) {
	console.log(i);

	if (i === 3) {
		break;
	}
	// wydrukuję: 1,2,3
}

for (var i = 1; i<=5; i++) {

	if (i === 3) {
		continue;
	}

	console.log(i);
	// wydrukuję 1,2,4,5
}

// Challenge 2

var years = [1991,1992,1993,1994,2008];

function printFullAge(years) {
	var ages = [];
	var fullAges = [];

	for (var i=0; i<years.length; i++) {
		ages[i] = 2016 - years[i]
	}
	console.log(ages);

	for (var i=0; i<years.length; i++) {
		if ( ages[i] >= 18 ) {
			console.log(ages[i]);
			fullAges.push(true);

		} else {
			console.log('Person '+(i+1)+' is '+ages[i]+' years old and it is not full age');
			fullAges.push(false);
		}
	}
	return fullAges;
};

var full_1 = printFullAge(years);
var full_2 = printFullAge([1999,1935,1998,2011]);


// ES5, ES2015, ES2016


// A SHORT HISTORY OF JAVASCRIPT

// - 1996: Changed LiveScript to JavaScript to attract Java develoeprs. JavaScripr has almost nothing to do with Java.
// - 1997: ECMAScript 1 became the first version of the JavaScript language standard:
// 	* ECMAScript: The language standard;
// 	* JavaScript: The language in practice.
// - 2009: ECMAScript 5 (ES5) was relased with lost of new features
// - 2015: ECMAScript 2015 (Dwie nazwy: ES6 lub ES2015) was relased: the biggest update ever.
// - 2016: ECMAScript 2016 (ES2016) was relased with minor changes only.


// JAVASCRIPT TODAY

// ES5: Fully suported in all modern browsers, ready to be used today(2016).

// ES6/ES2015: Only partial support in mdoern browesers, no suppoer in older browsers, Can't use it in production today(2016)

// ES2016: Almost no support in modern browsers, Can't use it in production today(2016)


// WHY WE'RE USING ES5 IN THIS COURSE

// ECMAScript 2015 still has very incomplete browser support today.
// ALmost all tutorials ans code you find on the web today is still in ES5
// When working on older codebase these will be written in ES5
// It's easier to learn ES5 and then upgrade to ES6/ES2015