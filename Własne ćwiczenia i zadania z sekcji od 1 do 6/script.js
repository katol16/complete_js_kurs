// Primitves VS Objects

// Primitives
var a =23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23

// Objects
var obj1 = {
	name: "john",
	age: 30
};

var obj2 = obj1;
obj1.age = 40;
console.log(obj1.age); // 40
console.log(obj2.age); // 40
// tutaj tak się dzieję, bo kiedy psizemy, ze obj2 = obj1, to nie tworzymy nwoego obj2, tylko tworzymy referncje do obj1
// dlatego jak zmienimy obj1, to tę zmianę widać w obj2


// Function contructor

var Person = function(name, surname) {
	this.name = name;
	this.surname = surname;
	this.sayHello = function() {
		console.log("Hi! My name is "+this.name);
	};
}

// utworzenie obiektu za pomocą konstruktora

var karol = new Person('Karol', 'Vogelgezang');
karol.sayHello();
console.log(karol);

// utworzymy obiekt za pomoca inputów

var addBtn = document.querySelector('.addBtn'),
	persons = [];

addBtn.addEventListener("click", addPerson);

function addPerson() {
	var nameInput = document.querySelector('.name').value,
		surnameInput = document.querySelector('.surname').value,
		newPerson = new Person(nameInput, surnameInput);

	// wciśniemy obikety do tablicy persons	
	persons.push(newPerson);
	newPerson.sayHello();
	newPerson.olimpic("kosz");
	console.log(persons);
}

Person.prototype.olimpic = function(sport) {
	console.log(this.name + " uprawia: " + sport);
};

karol.olimpic("piłka nożna");


console.log('--------------------------');

// UWAGA! Lepiej jest zapisywać metody obiektów w protoypie. Dlaczego tak?
// Otóż pokażemy to poniżej

var Person2 = function(name, surname) {
	this.name = name;
	this.surname = surname;
	this.sayHello = function() {
		console.log("Hi! My name is "+this.name);
	};
}

var kamil = new Person2('Kamil', 'Vogel');
console.log(kamil);

var Person3 = function(name, surname) {
	this.name = name;
	this.surname = surname;
}

var konrad = new Person3('Konrad', 'Vogel');

Person3.prototype.sayHello = function() {
	console.log("Hi! My name is " + this.name);
};
console.log(konrad);

// Różnica jest taka, ze w zmiennej kamil, zostanie zapsiana metoda. Jeśli jest tylko jedna, to jeszcze nic strasznego sie nie dzieje,
// ale wyobraź sobie, że bedzie tutaj tych metod 400 i wtedy każdy obiket utworzony przez konstruktor Person2, bedzie dziedziczylw syzstkie te fukncje.
// Wtedy robi sie problem. DLatego lepiej zrobić to przez prototype i dzięki "prototype chain", obiekt wciaż będzie miał dostęp do tej metody, ale metoda
// będzie zapisana "niżej", nie bezpośrednio w obiekcie
// TO JEST DZIEDZICZENIE W PRAKTYCE! :)


var obj = {
	name: 'Krzysiek',
	surname: 'tokarski'
};

// to poniżej nie zadziała :) obiekt nie jest utworzony za pomocą constructora, wiec nie ma dostępu do metody sayHello
// obj.sayHello();

console.log('--------------------------');

// Event dla wielu elementów za pomocą EVENT DELEGATION

var container = document.querySelector("#container");

container.addEventListener("click", changeColor);

function changeColor(event) {

	var box = event.target.className;
	console.log(box);

	if (box) {
		event.target.style.backgroundColor = "red";
	}

}

