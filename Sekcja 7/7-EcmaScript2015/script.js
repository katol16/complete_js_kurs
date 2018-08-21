// VARIABLE DECLARATION WITH LET AND CONT

// ES5
var name5 = 'Jane Smith'
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5); // wyświetli 'Jane Miller'

// ES6
const name6 = 'Jane Smith';

// uzywmay let, jeśli wartość bedzie się zmieniać
let age6 = 23;

// poniższy zapis spowoduje błąd, bo const, to stała i nie można jej nadpisywać i zmieniać
// jeśli coś nei zmienia swojej wartości, to używamy const
// name6 = 'Jame Miller';
// console.log(name6);

// UWAGA
// var - w ES5 są function-scoped
// let, consty - w ES5 są block-scoped

// generalnie :block", to jest np. wnętrze pętli for, albo instrukcji if
// więc let i const, są dostępne tylkow "block'u" w którym są zdeklarowane

// Poniżej przyklad

// ES5
function driversLicense5(passedTest) {
	if (passedTest) {
		// dodatkowo: poniższy console.log wyświetli undefined
		console.log(firstName);
		var firstName = 'John';
		var yearOfBirth =1990;

		console.log(firstName + 'born in '+yearOfBirth);
	}
	console.log('drugi console '+firstName + 'born in '+yearOfBirth);
}
driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
	if (passedTest) {
		// dodatkowo: poniższy console.log spowoduję bład "firstName is not defined"
		// więc let i const, nie mozemy użyć przed ich zdekalrowaniem!
		// console.log(firstName);
		let firstName = 'John';
		const yearOfBirth =1990;

		console.log(firstName + 'born in '+yearOfBirth);
	}
	// WSYKOCZY BŁAD przez poniższą console
	// console.log('drugi console '+firstName + 'born in '+yearOfBirth);
}
driversLicense6(true);

// Z const, jest tak, ze nie można jej też redefiniować np:

// const chuj;

// if (1==true) {
// 	chuj = "dupa"
// }

// raz zapisazny const, musi zostać taki jaki jest


// Inny przykład

let i =23;

for ( let i = 0; i < 5; i++) {
	// poniższy console.log wyswietli od 0 do 5
	console.log(i);
}

// poniższy cosnole log wyswietli 23
console.log(i);

// Ze względu na block scope, utworzą się nam dwie zmienne let, to nic ,ze mają to samą nazwę, ale tak bedzie
// daltego consola wyświetli najpeir 0,1,2,3,4,5 a pozniej 23

// ten sam przykład dla var 

var n =23;

for ( var n = 0; n < 5; n++) {
	// poniższy console.log wyswietli od 0 do 5
	console.log(n);
}

// poniższy cosnole log wyswietli 5
console.log(n);
