//Zadanie1

let arr = [1, "two", 3, 4, 5, 6, "seven"];

for (let i = 0; i <= arr.length; i++) {
	console.log(arr[i]);
}

//Zadanie2

let arr2 = [1, "two", 3, 4, 5, 6, "seven", 8, "nine"];

//1
console.log(arr2[0], arr2[1]);

//2
console.log(arr2[arr2.length - 1]);

//3
for (let i = 0; i <= arr2.length; i++) {
	console.log(arr2[i]);
}

//4
for (let i = 0; i <= arr2.length; i++) {
	if (i % 2 === 0) {
		console.log(arr2[i]);
	}
}

//5
for (let i = 0; i <= arr2.length; i++) {
	if (typeof (arr2[i]) == 'string') {
		console.log(arr2[i]);
	}
}

//6
for (let i = 0; i <= arr2.length; i++) {
	if (typeof (arr2[i]) == 'number') {
		console.log(arr2[i]);
	}
}

//Zadanie3

let arr3 = [11, 12, 13, 14, 15, 16, 17, 18, 19];

//1

let summ = arr3.reduce((a, b) => a + b);
console.log(summ);

//2

console.log(arr3.reduce((a, b) => a - b));

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

let biggest = 0;
arr3.forEach(v => {
	if (v > biggest) {
		biggest = v;
	}
})

//7

let smallest = 0;
arr3.forEach(v => {
	if (v < smallest) {
		smallest = v;
	}
});

//8

const arrLength = arr.length - 1;
arr3.forEach((v, i) => {
	console.log(arr[arrLength - i]);
});

//Zadanie4

function sumArr(param) {
	let result = 0;
	for (i = 0; i < param.length; i++) {
		result = result + param[i];
	}
	console.log(result)
};

sumArr([1, 2, 3, 4, 5, 6, 7]);


//Zadanie5

function tableArr(param) {
	let sum = 0;
	for (i = 0; i < param.length; i++) {
		sum = sum + param[i];
	}
	let avg = sum / param.lenght;
	for (i = 0; i < param.length; i++) {
		console.log(param[i] * avg);
	};
}

tableArr([1, 2, 3, 4, 5, 6, 7]);

//Zadanie6

function evenTab(param) {
	let sum = 0;
	let length = 0;
	for (i = 0; i < param.length; i++) {
		if (param[i] % 2 == 0) {
			sum = sum + param[i];
			length++;
		}
	}
	let avg = sum / length;
	console.log(avg)
};

evenTab([1, 2, 3, 4, 5, 6, 7]);


//Zadanie7

const arr4 = [40, 10, 30, 50, 20, 60, 11, 70];

function sortFunc(a, b) {
	return a - b;
}
console.log(arr4.sort(sortFunc));


//Zadanie8

const arr5 = [1, 3, 2, 5, 6, 7, ];
const arr6 = [7, 3, 2, 5, 4, 2, 1];
const newArr = [];

function addIndexes(arr5, arr6) {
	arr5.forEach((num1, i) => {
		newArr.push(num1 + arr6[i]);
	});
	return newArr;
}

console.log(addIndexes(arr5, arr6));

//Zadanie9

function withoutSecElement(arr, element) {
	let el = arr.indexOf(element);
	arr.splice(el, 1);
	return arr;
}

console.log(withoutSecElement(arr4, arr4[2]));


//Zadanie10

function numTab(param) {
	return param.map(el => {
		return el * (-1);
	})
}
console.log(numTab([1, 2, 3, 4, 6, 8, -1, -2, -3, -4, -5, -6, -7]));