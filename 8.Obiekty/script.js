//Zadanie1

let car = {
    name: "Audi",
    age: 2015,
    color: "black",
    hp: 250
}

console.log(car.name, car.age, car.color, car.hp);


//Zadanie2

let car = {
    name: "Audi",
    age: 2015,
    color: "black",
    hp: 250,
    currentName: function(newName) {
        this.name = newName
    }
}

console.log(car.name)
car.currentName("BMW");
console.log(car.name);

//Zadanie3

let sumObject = {
    num: 0,
    sumNumbers: function(arr) {
        for(let i=0; i < arr.length; i++) {
            this.num += arr[i];
        }
    }
}
sumObject.sumNumbers([2,5,10]);
console.log(`Suma: ${sumObject.num}`);

//Zadanie4

var car={
    name:"BMW",
    age: 12
}

for(let key in car){
    console.log(`${key}: ${car[key]}`);
}

//Zadanie5

let car = {
	name: 'BMW',
	age: 12,
    color: 'black',
    carOwner: {
        name: 'Piotr',
        surname: 'Gawelda'
    }
};

for(let key in car.carOwner){
    console.log(`${key}: ${car.carOwner[key]}`);
}

//Zadanie6

let car = {
	name: 'BMW',
	age: 12,
    color: 'black',
};

car.country = "Poland";

car.sound = function() {
    console.log("Hello");
}

car.sound();