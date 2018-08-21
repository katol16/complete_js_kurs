// // Function costructor

// // stary sposób tworzenia obiektu
// var john = {
// 	name: 'John',
// 	yearOfBirth: 1990,
// 	job: 'teacher'
// }

// // tworzymy contructor
// var Person = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// 	// możemy umieścic metodę calcuateAge w construtorze, ale to nie zawsze jest dobra metoda, 
// 	// bo np. niekażdy nowo utworzony obiekt, bedzie chciał korzystać z tej metody, więc zrobimy to za pomocą prototype
// 	// this.calculateAge = function() {
// 	// 	console.log(2016 - this.yearOfBirth)
// 	// };
// }

// // utworzymy prototyp i to też zadziała dla naszych poniższych obiektów (john, jane, mark)
// Person.prototype.calculateAge = 
// 	function() {
// 		console.log(2016 - this.yearOfBirth)
// 	};
// // możemy robić to samo z właściwościami (nie tylko z metodami jak powyżej)
// Person.prototype.lastName = 'Smith';



// // tak tworzymy nowy obiekt za pomocą costructro function. Ten obiekt jest isntancją obiektu Person
// // dzieki "new", utworzymy nowy obiekt (na poczatku pusty), to "new", sprawi ,ze słowo this w naszej regularnej funckji Person,
// // nie będzie wskazywało na globalny obiekt ( tak jak to bori w regularnnych funkcjach) tylko wskażę na nasz nowo utworzony obiekt
// var john = new Person('John',1990,'teacher');
// var jane = new Person('Jane',1988,'designer');
// var mark = new Person('Mark',1920,'retired');


// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// // Creating objects (another way - less popular, but still usefull)
// // Object.create

// var personProto = {
// 	calculateAge: function() {
// 		console.log(2016-this.yearOfBirth);
// 	}
// };

// var mike = Object.create(personProto);
// mike.name = "Mike";
// mike.yearOfBirth = 1988;
// mike.job = 'programmer';

// var dany = Object.create(personProto, {
// 	name: { value: 'Jane'},
// 	yearOfBirth: { value: 1969},
// 	job: { value: 'designer'}
// });


// // Primitves VS Objects

// // Primitives
// var a =23;
// var b = a;
// a = 46;
// console.log(a); // 46
// console.log(b); // 23

// // Objects
// var obj1 = {
// 	name: "john",
// 	age: 30
// };

// var obj2 = obj1;
// obj1.age = 40;
// console.log(obj1.age); // 40
// console.log(obj2.age); // 40
// // tutaj tak się dzieję, bo kiedy psizemy, ze obj2 = obj1, to nie tworzymy nwoego obj2, tylko tworzymy referncje do obj1
// // dlatego jak zmienimy obj1, to tę zmianę widać w obj2

// // Functions

// var age = 27;
// var obj = {
// 	name: 'Jonas',
// 	city: 'Lisbon'
// };

// function change(a, b) {
// 	a = 30;
// 	b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age); // 27 - tu chyba nie zmienia zmiennej age ze względu scope, on tworzy jak gdyby drugą zmienną age w funkcji ( CHYBA )
// console.log(obj.city); // San Francisco


// // FIRST CLASS FUNCTIONS: PASSING FUNCTIONS AS ARGUMENTS

// // A function is an instance od the Object type
// // A function behaves like any other object
// // We can store functions in a variable
// // We can pass a function as an argument to another function
// // We can return a function from a function
// // Ze względu na powyższe podpunkty mówimy, że w JavaScript mamy "First Class Functions"

// // Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
// 	var arrRes = [];
// 	for (var i=0; i<arr.length; i++) {
// 		// tutaj przekażemy funkcję jako argument (callBack function)
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// }

// // callBack functions - to takie funkcje, ktore między innymi rpzekazujemy jako argument
// // Jak wywołujemy jakąś funkcję rpzy zdarzeniu, to chyba też używamy callBack functions
// function calculateAge(el) {
// 	return 2016 - el;
// }

// function isFullAge(el) {
// 	return el >= 18;
// }

// function maxHeartRage(el) {
// 	if (el >= 18 && el <=81) {
// 		return Math.round(206.9 - (0.67 * el));
// 	} else {
// 		return -1;
// 	}
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRage);
// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// // Dużo lepiej jest mieć kilka takich funkcji niż jedną dużą


// // Functions returing functions

// function interviewQustion(job) {
// 	if (job === 'designer') {
// 		// tutaj designerQuestion
// 		return function(name) {
// 			console.log(name + " co to desinger?");
// 		}
// 	} else if (job === 'teacher') {
// 		// tutaj zwrócimy teacherQuestion
// 		return function(name) {
// 			console.log(name + " co to teacher?");
// 		}
// 	} else  {
// 		return function(name) {
// 			console.log(name + " co ty robisz?");
// 		}
// 	}
// }

// // powyższa funckja nie zwróci tylko wartości, czy zmiennej. Zwróci całą funkcję i ma to swoje plusy!

// // tutaj zostanie zwrócona funkcja
// // Pytanie dla nauczyciela
// var teacherQuestion = interviewQustion('teacher');
// // Pytania dla projektanta
// var designerQuestion = interviewQustion('designer'); 


// teacherQuestion('John');
// designerQuestion('John');

// // możemy też wywołać to w ten sposób, całkiem intuicyjny
// interviewQustion('teacher')('Mark');

// // Staraj się pisąc kod w ten sposób! Nie pisz dużych funkcji tylko coś takiego jak tutaj! 
// // ( przerób swoje gry, i wystaw w świat i zapytaj czy jest to spoko zrobione )


// // Immediately Invoked Function Expressions (IIFE)

// // IIFE

// // zwykła funkcja
// function game() {
// 	var score =  Math.random() * 10;
// 	console.log(score >= 5);
// };
// game();

// // teraz załóżmy, ze chcemy ukryć jakieś dane, zmienne, które są w funkcji
// // możemy to zrobić za pomocą IIFE

// // w poniższym przykładzie, uzytkownik nie moze wywołąć naszej funkcji w consoli, bo funckja nie ma nazwy (nie ma dostępu do naszej funkcj).
// // nie dowie się nic na temat tego co jest w srodku funkcji np. zmienna score.

// (function () {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// })();

// // zapisanie poniższej funckji anonimowej wyrzuci błąd, bo JS nie ma jak się do niej odnieść 
// // generalnie cały ten zapis to function declaration, i JS nie ma jak się do neigo odwołąć bo nie ma nazwy
// // w momencie kiedy opleciemy całą funkcję w nawiasy (), tak jak w lini 203 do 206, to mamy wówczas function expression,
// // na konic dajemy (); bo chcemy jeszcze wywołąć funkcję
// // function() {
// // 	console.log("nie wywoła się");
// // }

// // trzeba zauważyć ,że jest to funckja anonimwoa, ktróa zostaje wywołana. Musi byc ona zamknięta w nawiasach, bo wtedby będziemy mieli javascript expression

// // taką funckę, o ile nie przypiszemy jej do zmiennej, możemy wywołąć tylko raz (chyba rzadko jest sens kiedykowliek przypisywać ją do zmeinnej)


// // jeszcze dodamy nową funkcję IIFE z przekazaniem parametru

// (function (goodLuck) {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5 - goodLuck);
// })(2);


// // CLOSURES

// function retirement(retirementAge) {
// 	var a = ' years untill retirement';
// 	return function(yearOfBirth) {
// 		var age = 2016 -  yearOfBirth;
// 		// użyjemy w consoli parametru z zewnętrznej funkcji retirement (oraz zmiennej a i age)
// 		// i właśnei to, ze nasza funkcja jest w stanie użyć tych zmiennych i parametrów jest CLOUSURES
// 		// Domknięcia to funkcje, których funkcje wewnętrzne odwołują się do niezależnych (wolnych) zmiennych. 
// 		// Innymi słowy, funkcje zdeklarowane wewnątrz domknięcia 'pamiętają' środowisko, w którym zostały utworzone.

// 		// Clousures summary:
// 		// An inner function has always access to the variables and parametes of its outer function, 
// 		// even after the outer function has returned
// 		console.log((retirementAge - age) + a);
// 	}
// }

// var retirementUS = retirement(66);
// retirementUS(1990);
// // lub retirement(66)(1990)

// // Przykład z porpzedniej lekcji ale zrobiony z CLUSURES

// function interviewQustion(job) {
// 	// teraz zwrócimy jedną funkcję, bo już wiemy o CLOUSRES, lepiej mieć jedną funkcję, bo to czystszy kod, 
// 	// wiec ponizsze rozwiązanie jest lespze niz to z porpzedneij lekcji
// 	return function(name) {
// 	if (job === 'designer') {
// 		console.log(name + " co to desinger?");
// 	} else if (job === 'teacher') {
// 		console.log(name + " co to teacher?");
// 	} else  {
// 		console.log(name + " co ty robisz?");
// 		}
// 	}
// }

// var teacherQuestion = interviewQustion('teacher');
// var designerQuestion = interviewQustion('designer'); 

// interviewQustion('teacher')('Mark');


// // BIND, CALL AND APPLY

// var john = {
// 	name: 'John',
// 	age: 26,
// 	job: 'teacher',
// 	presentation: function(style, timeOfDay) {
// 		if (style === 'formal') {
// 			console.log('Good' + timeOfDay + ', Ladies and gentlemen! I\'m ' +this.name+' and I\'m ' + this.age+' years old. Have a nice '+ timeOfDay);
// 		} else if (style === 'friendly') {
// 			console.log('Hey! What\s up? I\'m '+this.name+' have a nice '+timeOfDay);
// 		}
// 	}
// };

// // CALL
// // teraz chcemy użyć metody presentation z obiektu "john", a "emily" nie ma tej metody.
// // możmey to zrobić za pomocą metody call
// var emily = {
// 	name: 'Emily',
// 	age: 22,
// 	job: 'desginer'
// };

// john.presentation('formal','morning');

// // peirwszy argument ustawia "this", więc ustaiwmy tam emily, wtedy this bedzie wskazywało na obiekt "emily"
// // więc tutaj pożyczamy metodę z innego obiektu
// john.presentation.call(emily, 'friendly', 'afternoon');

// // APPLY
// // ta metoda jest bardzo podobna do CALL, tylko drugi argrmunt to tablica. 
// // Na naszym przykąłdzie to niezadziała, bo mamy jako argumenty, zmienne a nie tablicę
// // john.presentation.apply(emily, ['friendly','afternoon']);

// // BIND
// // działa również podobnie do CALL, tylko zwróci funkcję.
// // ponieważ zwraca funkcję, przechowamy ją w zmiennej

// // dodamy róniez defaultowy arguemnt ("friendly") -  dodamy tylko jeden bo tak można
// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// // to samo zrobimy dal Emily
// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');

// // teraz zmeinimy trochę przykłąd z poprzedniej lekcji i użyjemy bind

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
// 	var arrRes = [];
// 	for (var i=0; i<arr.length; i++) {
// 		// tutaj przekażemy funkcję jako argument (callBack function)
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// }

// // callBack functions - to takie funkcje, ktore między innymi rpzekazujemy jako argument
// // Jak wywołujemy jakąś funkcję rpzy zdarzeniu, to chyba też używamy callBack functions
// function calculateAge(el) {
// 	return 2016 - el;
// }

// function isFullAge(limit, el) {
// 	return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// // poniżej jako drugi argument podamy "isFullAge.bind(this, 20)",
// // a to zwróci funckję z defaultowym peirwszym parametrem (limit).
// // więc drugim arguementem będzie funkcja. Nie mozemy dać samego isFullAge, bo bedzie miala wtedy dwa parametry.
// // Więc zostanie zwrócona kopia funkcji isFullAge, z defaultowym parametrem limit, który wynosi 20
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(this, 20);
// console.log(fullJapan);
// console.log(ages)


// CODING CHALLENGE Część pierwsza (słabsza wersja zadania)

// IIFE -  zrobimy to zadanie za pomocą IIFE, (nasz kod będzie "bezpieczny")
// teraz jeśłi ktoś zechcce użyć naszej poniższej funkcji i użyje zmeinnych o tej samej nazwie, 
// to nie bedą one się gryźć z naszymi bo użyliśmy IIFE, wiec nasz kod jest zawsze "bezpieczny".
// Uwaga, musimy zakomentować wsszystko powyżej, zeby to zadziałąlo, bo coś się pierdoli w innym wypadku

// (function() {

// 	// tworzymy contructor
// 	function Question(question, answers, correct) {
// 		this.question = question;
// 		this.answers = answers;
// 		this.correct = correct;
// 	}

// 	// do wyświetlenia pytania w cosnoli użyjemy metody ( ale przez koncept prototype, zeby ta metoda nie miała dostępu do wszystkich pytań )
// 	// dzięki prototype, to będzie metoda utworzona dla instancji utworzonych obiektów (q1, q2, q3)
// 	Question.prototype.displayQuestion = function() {
// 		console.log(this.question);

// 		for ( var i = 0; i < this.answers.length; i++ ) {
// 			console.log(i +": "+ this.answers[i]);
// 		}
// 	}
// 	Question.prototype.checkAnswer = function(ans) {
// 		if ( ans === this.correct ) {
// 			console.log('Correct answer!');
// 		} else {
// 			console.log('Wrong answer. Try again :)');
// 		}
// 	}

// 	var q1 = new Question('John?',['a','b','c'], 0);
// 	var q2 = new Question('Karol?',['a','b','c'], 1);
// 	var q3 = new Question('Pawel?',['a','b','c'], 2);

// 	var questions = [q1, q2, q3];

// 	var n = Math.floor(Math.random() * questions.length);

// 	questions[n].displayQuestion();

// 	// 'parseInt' zmieni string na number a tego potrzebujemy
// 	var answer = parseInt(prompt('Please select correct answer.'));

// 	questions[n].checkAnswer(answer);

// })();


// CODING CHALLENGE 2 Częśćdruga (lepsza wersja zadania)

// całośc zamnięta w IIFE
(function() {

	// tworzymy contructor (duża litera)
	function Question(question, answers, correct) {
		// ustwiamy this
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	// do wyświetlenia pytania w cosnoli użyjemy metody ( ale przez koncept prototype, zeby ta metoda nie miała dostępu do wszystkich pytań )
	// dzięki prototype, to będzie metoda utworzona dla instancji utworzonych obiektów (q1, q2, q3)
	Question.prototype.displayQuestion = function() {
		console.log(this.question);

		for ( var i = 0; i < this.answers.length; i++ ) {
			console.log(i +": "+ this.answers[i]);
		}
	}

	// musimy dodać tu drugi parametr (callback), bo w wywołaniu checkAnswer, mamy dwa 
	Question.prototype.checkAnswer = function(ans, callback) {
		var sc;

		if ( ans === this.correct ) {
			console.log('Correct answer!');

			// tutaj przekażemy true, bo to jest nasza funckja wewnątrz score, ktora dostaje parametr (correct)
			// musimy to wywołanie gdzieś przechowywaqć, wiec tworzymy zmienną "sc" powyżej, a później nadpisujemy
			sc = callback(true);

		} else {
			console.log('Wrong answer. Try again :)');

			sc = callback(false);
		}

		// dzięki "this" i prototype chain, mamy dostęp do obiektu i do metody displayScore
		this.displayScore(sc);
	}

	Question.prototype.displayScore = function(score) {
		console.log('Your current score is: ' + score);
		console.log('-----------------------');
	}

	var q1 = new Question('John?',['a','b','c'], 0);
	var q2 = new Question('Karol?',['a','b','c'], 1);
	var q3 = new Question('Pawel?',['a','b','c'], 2);

	var questions = [q1, q2, q3];

	function score() {
		var sc = 0;
		return function(correct) {
			if (correct) {
				sc++;
			}
			return sc;
		}
	}

	// funkcja score(); zwróci inną funkcję, wiec przechowamy ją w zmiennej.
	// Pamiętaj, że dzięki CLOUSERES, zmeinna "sc", będzie zawsze dostepna w "keepScore"
	var keepScore = score();

	function nextQuestion() {

		var n = Math.floor(Math.random() * questions.length);

		questions[n].displayQuestion();

		// 'parseInt' zmieni string na number a tego potrzebujemy
		var answer = prompt('Please select correct answer.');

		if ( answer !== 'exit') {
			// tutaj przekażemy też zmeinną keepScore, która zaweira funkcję i CLOUSURES, któa śledzi nasz wynik
			questions[n].checkAnswer(parseInt(answer), keepScore);	
			nextQuestion();	
		}

	}

	nextQuestion();

})();