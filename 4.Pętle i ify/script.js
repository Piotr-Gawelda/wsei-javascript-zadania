//Zadanie1

let randomNumber = 4;
let randomNumber2 = 3;

if (randomNumber > randomNumber2) {
    console.log("randomNumber jest większe")
} else {
    console.log("randomNumber jest mniejsze")
}

//Zadanie2

let number1 = 100;
let number2 = 101;
let number3 = 74;

if (number1 > number2 && number1 > number3) {
    console.log('number1 jest największe');
} else if (number2 > number3) {
    console.log('number2 jest największe');
} else {
    console.log('number3 jest największe');
}

//Zadanie3

for (let i = 1; i <= 10; i++) {
    console.log("Lubię JavaScript");
}

//Zadanie4

let result = 0;

for (let i = 1; i <= 10; i++) {
    result += i;
}

console.log(result);

//Zadanie5

let n = 5;
for (i = 0; i < n; i++) {
    if (i % 2) {
        console.log(i + " parzysta");
    } else {
        console.log(i + " nieparzysta");
    }
}

//Zadanie6

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("i=" + i + ", j=" + j);
    }
}

//Zadanie7

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Zadanie8
//a
let stars = '*';
for (let i = 0; i < 5; i++) {
    let result = '';
    for (let j = 0; j <= i; j++) {
        result += stars;
    }
    console.log(result)
}

// b
// let stars = '*';
// let spacer = ' ';

// for (let i = 0; i < 5; i++) {
//     let result = '';
//     for (let j = 4; j > i; j--) {
//         result += spacer;
//     }
//     for (let k = 0; k <= i; k++) {
//         result += stars + spacer;
//     }
//     console.log(result);
// }

// c
// let star = "*";
// let space = " ";
// let j = 4;
// let l = 1;
// for (let i = 0; i < 5; i++) {

//     result1 = "";
//     result2 = "*";

//     for (let k = j; k > 0; k--) {
//         result1 += space;
//     }
//     j--;
//     for (let n = 1; n < l; n++) {
//         result2 += (star + star);
//     }
//     l++;
//     console.log(result1 + result2);

// }

// d
// let star = "*";

// for (let x = 0; x < 5; x++) {
//     let result = '';
//     for (let y = 0; y < x + 1; y++) {
//         result += star;
//     }
//     for (let z = 0; z < 5 - (x + 1); z++) {
//         result += (z + 1);
//         result += (z + 1);
//     }
//     console.log(result);
// }


// e
// let star = ' *';

// for (let x = 0; x < 5; x++) {
//     let result = '';
//     for (y = 0; y < 5 - x; y++) {
//         result += ' ';
//     }
//     for (z = 0; z < x + 1; z++) {
//         result += star;
//     }
//     console.log(result);
// }
// for (let x = 0; x < 3; x++) {
//     let result = '';
//     for (y = 0; y < 5; y++) {
//         result += ' ';
//     }
//     result += star;
//     console.log(result);
// }