//Zadanie1

function Person(name, lastName, age, country, city, language) {
    this.name = name;
    this.lastname = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    this.changeCity = function (newCity) {
        return (this.city = newCity);
    };
    this.changeAge = function (newAge) {
        return (this.age = newAge);
    };
}
const p1 = new Person('Piotr', 'Gawelda', 22, 'Germany', 'Fraktfurt', 'german');
const p2 = new Person('Jakub', 'Bryniak', 33, 'Germany', 'Berlin', 'german');
const p3 = new Person('Monika', 'Lasek', 44, 'France', 'Paris', 'french');
const p4 = new Person('Anna', 'Tysa', 55, 'Poland', 'Rzeszow', 'polish');
const p5 = new Person('Pawel', 'Mazurek', 66, 'Poland', 'Krakow', 'polish');

p1.changeAge(77);
p1.changeCity('Pila');
console.log(p1, p2, p3, p4, p5);

//Zadanie2

function Calculator(){
    this.memory = [],
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        console.log(a + b);
    },
    this.clearMemory = function() {
        this.memory = [];
    },
    this.showMemory = function() {
        console.log(this.memory);
    }
    this.sub = function(c,d) {
        this.memory.push('Odejmowanie');
        console.log(c -d);
    };
    this.mul = function(e,f) {
        this.memory.push('Mnożenie');
        console.log(e *f);
    };
        this.div = function(g,h) {
        this.memory.push('Dzielenie');
        console.log(g/h);
    };
    
}

const calc1 = new Calculator();
calc1.sum(22,11)
calc1.sub(8,4)
calc1.mul(30,3)
calc1.div(20,3)
calc1.showMemory()

//Zadanie3

function Game() {
	this.changeNumber = function () {
		Game.prototype.interval = setInterval(() => {
			Game.prototype.number = Math.round(Math.random() * 10);
			console.log(Game.prototype.number);
		}, 1000);
	};
	this.checkNumber = function () {
		Game.prototype.check = setInterval(() => {
			if (Game.prototype.number > 5) {
				clearInterval(Game.prototype.interval);
				clearInterval(Game.prototype.check);
			}
		}, 1000);
	};
}
const game1 = new Game();
const game2 = new Game();
game1.changeNumber();
game2.checkNumber();
