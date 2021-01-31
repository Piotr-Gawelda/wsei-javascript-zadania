//Zadanie1

const divs = document.querySelectorAll(".more-divs");

function divList(param) {
    let arr = [];

    for(let i = 0; i < param.length; i++) {
        arr.push(param[i].tagName);
    }
    return arr
}

console.log(divList(divs));

//Zadanie2

const shortList = document.querySelector(".short-list");

function displayDetails(item) {
//1
console.log(item.innerHTML);

//2
console.log(item.outerHTML);

//3
console.log(item.className);

//4
console.log(item.classList);

//5
console.log(item.dataset);
}

displayDetails(shortList);


//Zadanie3

const numbersDataset = document.querySelector("#datasetCheck");

const sumAndSub = takeNum => {
    const firstNum = parseInt(takeNum.dataset.numberone);
    const secNum = parseInt(takeNum.dataset.numbertwo);
    const thirdNum = parseInt(takeNum.dataset.numberthree);

    let adding = firstNum + secNum + thirdNum;
    let sub = firstNum - secNum - thirdNum;

    return [adding, sub];
}

console.log(sumAndSub(numbersDataset));

//Zadanie4

document.querySelector("#spanText").innerText = "Random text";

//Zadanie5

document.querySelector("#spanText").className = "random-class";

//Zadanie6

let element = document.querySelector("#classes");
let lists = element.classList;

let concat = [];

for(let i = 0; i < lists.length; i++) {
    concat.push(lists[i]);
    console.log(lists[i]);
}

console.log(concat.join("+"));
element.className = "";

//Zadanie7

const list = document.querySelectorAll("#longList > li");

function addAttributes(elements) {
    elements.forEach(element => {
        if(!element.getAttribute("data-text")) {
            element.dataset.text = "text";
        }
    })
}

const result = addAttributes(list);


//Zadanie8

function stringClass(className) {
    let obj = {newClass: className};
    stringClass2(obj)
}

function stringClass2(obj) {
    let newClass = obj.className;
    document.querySelector("#myDiv").className = newClass;
}

stringClass("string_z_parametru");


//Zadanie9

function addClass(param) {
    param = parseInt(param);
    const numbers = document.querySelector("#numbers");

    if(param %2 === 0) {
        numbers.className = "even";
    } else {
        numbers.className = "odd";
    }
}

let randomNum = Math.floor(Math.random() * 11);
addClass(randomNum);


//Zadanie10

function getLongList(element)  {
	return [...element.children].map((el) => el.innerText);
};

console.log(getLongList(longList));


//Zadanie11

let longLists = document.querySelectorAll("#longList li");

function changeValues(element) {
	element.forEach((item) => {
		item.dataset.oldValue = item.innerHTML;
		item.innerText = Math.round(Math.random() * 10);
	});
};

changeValues(longLists);
