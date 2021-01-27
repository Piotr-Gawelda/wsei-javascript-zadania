/*
Zadanie1 wraz z Zadanie2
*/
function Person(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.favDishes = [];

    this.showDetails = function () {
        console.log(`name: ${this.firstName} ${this.lastName} age: ${this.age} country: ${this.country}, ${this.city}, ${this.favDishes}`);
    }
    this.addOneYear = function () {
        ++this.age;
    }
}

const person1 = new Person("Piotr", "Gawelda", 22, "Poland", "Krakow", ["rosol", "zurek"]);
const person2 = new Person("Jakub", "Bryniak", 31, "Germany", "Berlin", ["kebab", "kielbasa"]);

person1.addOneYear();
person2.addOneYear();
person2.addOneYear();
person1.showDetails();
person2.showDetails();

Person.prototype.addNewFavDishes = function (name) {
    this.favDishes.push(name);
}

Person.prototype.showFavDishes = function () {
    console.log("(" + this.firstName + " " + this.lastName + ")" + " Ulubione danie: " + this.favDishes.join(', '))
}

person1.addNewFavDishes('Bigos');
person1.addNewFavDishes('Leczo');
person1.showFavDishes();

person1.addNewFavDishes('Ryba');
person1.showFavDishes();


//Zadanie3

function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    this.sum = function () {
        return (this.num1 + this.num2);
    }

    this.sub = function () {
        return (this.num1 - this.num2);
    }

    this.multip = function () {
        return (this.num1 * this.num2);
    }

    this.div = function () {
        if (this.num2 === 0) {
            console.log("Nie dziel przez 0")
        } else {
            return (this.num1 / this.num2);
        }
    }
}

const calc1 = new Calculator(5, 3);
const calc2 = new Calculator(5, 0);
console.log(calc1.sum());
console.log(calc2.div());


//Zadanie4

function Constructor() {
    this.number = 0;

    this.up = function () {
        this.number++;
    }

    this.down = function () {
        if (this.number > 0) {
            this.number--;
        } else {
            console.log("Jesteś na ziemi.");
        }
    }

    this.showLevel = function () {
        console.log(this.number);
    }
}

var constructor = new Constructor();

constructor.showLevel();
constructor.up();
constructor.up();
constructor.showLevel();
constructor.down();
constructor.showLevel();