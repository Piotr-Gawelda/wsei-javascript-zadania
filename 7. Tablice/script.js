//Zadanie1

let arr = [1, "two", 3, 4, 5, 6, "seven"];

for(let i=0; i<=arr.length; i++) {
    console.log(arr[i]);
}

//Zadanie2

let arr2 = [1, "two", 3, 4, 5, 6, "seven", 8, "nine"];

//1
console.log(arr2[0], arr2[1]);

//2
console.log(arr2[arr2.length - 1]);

//3
for(let i=0; i<=arr2.length; i++) {
    console.log(arr2[i]);
}

//4
for(let i=0; i<=arr2.length; i++) {
    if (i % 2 === 0) {
		console.log(arr2[i]);
	}
}

//5
for(let i=0; i<=arr2.length; i++) {
    if (typeof(arr2[i]) == 'string') {
		console.log(arr2[i]);
    }
}

//6
for(let i=0; i<=arr2.length; i++) {
    if (typeof(arr2[i]) == 'number') {
		console.log(arr2[i]);
	}
}

//Zadanie3

let arr3 = [11, 12, 13, 14, 15, 16, 17, 18, 19];

//1

let summ = arr3.reduce((a,b)=> a + b);
console.log(summ);

//2

console.log(arr3.reduce((a,b)=> a - b));

//3

console.log(summ / arr3.length);

//4

arr3.forEach((even) => {
	if (even % 2 === 0) {
		console.log(even);
	}
});

//5

arr3.forEach((odd) => {
	if (odd % 2 !== 0) {
		console.log(odd);
	}
});

//6

//7

//8


//Zadanie4