///////////////////////////////////////
// Lecture: Hoisting

// hoisting for functions
// między innymi o to chodzi w "hoistingu", ze wywołąnie funckji moze być przed jej zapisem
calculateAge(1990);

function calculateAge(year) {
    console.log(2016 - year)
}
// calculateAge(1990);


// teraz poniższe wywołąnie przed funkcją nie zadziała, bo poniższa funckaj to nie function declariation, tylko function expression, 
// a hosting dziala tlyko dla function declariation

// retairment(1991);
var retairment = function(year) {
    console.log(65 - (2016 - year));
}


// hoisting for variables

// poniżej nie będzie błedu jak w lini 31. JavaScript wie, ze taka zmeinna isntnieje, ale jeszcze nie przypisał jej zadnej wartości
console.log(age); // undefined
var age = 26;
console.log(age); // 26

// UWAGA!
// console.log(chuj); // teraz bedziemy mieli błąd "Uncaught ReferenceError: chuj is not defined"


function foo() {
    var age = 65;
    console.log(age)
}
foo();
console.log(age); //wyswietli age jako 26, nie odzcyta tego "age" z funckji


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(a + b + c + d);
    // funkcja third, ma dostęp tyko do "a" i "d"
    console.log(a+d);
}



///////////////////////////////////////
// Lecture: The this keyword

// this, będzie tu window object
// console.log(this);

calculateAge(1985);
// poniżej this, znowu bedzie objektem window, bo funkcja calculateAge, jest funkcją regularną, a w takich funkcjach, "this", kieruje na window.
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        // teraz słowo kluczowe this, znwou wskażę na obiekt window! Mimo tego, że funkcja innerFunction jest zawarta w metodzie, 
        // to jest to wciąż regularna funkcja, więc będzie wskazywała na obiekt globalny window 
        innerFunction();
    }
}

// w metodach, słowo kluczowe "this" wskazuję na obiekt w którym jest zawarta metoda.
john.calculateAge();


var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

// metodę calcualteAge z obiektu john, przypsizemy do obiektu mike 
mike.calculateAge = john.calculateAge;
mike.calculateAge();

// UWAGA! Pamiętaj, że this, będzie miało przypisaną konkretną wartośc dopeiro przy wywołaniu metody! 

// Sekcja 4

// DOM: Document Object Model - structured representation of an HTML document