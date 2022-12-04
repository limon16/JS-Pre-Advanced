class Worker {
	constructor(firstName, secondName, rate, days) {
		this.name = firstName;
		this.surname = secondName;
		this.rate = rate;
		this.days = days;
	}
	getSalary(){
		return this.rate * this.days;
	}
}
console.log('Worker');
const workerOne = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(workerOne.name); // виведе 'Ivan'
console.log(workerOne.surname); //виведе 'Ivanov'
console.log(workerOne.rate); //виведе 10
console.log(workerOne.days); //виведе 31
console.log(workerOne.getSalary()); //виведе 310 - тобто 10*31
console.log('');
const workerTwo = new Worker('Petro', 'Zibas', 18, 15);
console.log(workerTwo.name); // виведе 'Petro'
console.log(workerTwo.surname); //виведе 'Zibas'
console.log(workerTwo.rate); //виведе 18
console.log(workerTwo.days); //виведе 15
console.log(workerTwo.getSalary()); //виведе 870 - тобто 18*15

class MyString {
	reverse(text) {
		return console.log(text.split('').reverse().join(''));
	}

	ucFirst(text) {
		return console.log(text[0].toUpperCase() + text.slice(1));
	}

	// ucWords(text) {
	// 	let arr = text.toLowerCase().split(' ');
	// 	let newStr = [];
	// 	for (let i = 0; i < arr.length; i++){
	// 		newStr.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1, arr[i].length));
	// 	}
	// 	return console.log(newStr.join(' '));
	// }

	// ucWords(text) {
	// 	return text.toLowerCase().replace(/(^|\s)\S/g, function (leter) {
	// 		return leter.toUpperCase();
	// 	});
	// }

	ucWords(text) {
  return console.log(
		text
			.toLowerCase().split(' ')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	);
}
}

console.log('');
console.log('MyString');
let str = new MyString();
str.reverse('IVAN'); //виведе 'NAVI'
str.ucFirst('arsenal'); //виведе 'Arsenal'
str.ucWords('arsenal arsenal arsenal'); //виведе 'Arsenal Arsenal Arsenal'

console.log('');
console.log('CoffeeMake');
class CoffeeMake {
	constructor(coffeeVariety) {
		this.coffeeVariety = coffeeVariety;
	}
	on() {
		console.log(`Oберіть свій вид кави!`);
	}
	off() {
		console.log('Заберіть свій напій.Смачного!');
	}
}
class Drip extends CoffeeMake {
	constructor(coffeeVariety, filter) {
		super(coffeeVariety);
		this.filter = filter;
		console.log(`Coffee: ${this.coffeeVariety}, Filter: ${this.filter}`);
	}
}
let drip = new Drip('Arabika', 'Paper Filter');
drip.on();
console.log(drip);
drip.off();

class Carob extends CoffeeMake {
	constructor(coffeeVariety, temperature) {
		super(coffeeVariety);
		this.temperature = temperature;
		console.log(
			`Coffee: ${this.coffeeVariety}, Temperature: ${this.temperature}℃`
		);
	}
}
let carob = new Carob('Brasilia', '95');
carob.on();
console.log(carob);
carob.off();

class Original extends CoffeeMake {
	constructor(coffeeVariety, milk) {
		super(coffeeVariety);
		this.milk = milk;
		console.log(`Coffee: ${this.coffeeVariety}, Milk: ${this.milk}`);
	}
}
let original = new Original('Facamara Honey', 'Almond milk');
original.on();
console.log(original);
original.off();