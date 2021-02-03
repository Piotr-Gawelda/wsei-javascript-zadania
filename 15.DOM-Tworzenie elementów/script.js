//Zadanie1

const newDiv = document.createElement("div");
newDiv.innerHTML = "To jest nowy element"

document.body.appendChild(newDiv);

//Zadanie2

const newUl = document.createElement("ul");
const fruits = ["apple", "banana", "orange", "grape", "grapefruit", "lemon", "mango"];

for (let i = 0; i < fruits.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = fruits[i];
    newUl.appendChild(newLi);
}

document.body.appendChild(newUl);


//Zadanie3

newUl.addEventListener("click", () => {
    const removeLi = newUl.querySelectorAll("li:nth-of-type(odd)");
    removeLi.forEach(item => {
        item.remove();
    })
})


//Zadanie4

const btn = document.createElement("button");
btn.innerText = "Click";
document.body.appendChild(btn);

btn.addEventListener("click", function (e) {
    e.target.remove();
})


//Zadanie5

const randomNum = Math.floor(Math.random() * 20);

for (let i = 0; i < randomNum; i++) {
    const randomDiv = document.createElement("div");
    randomDiv.innerText = `to jest div numer: ${i}`;
    document.body.appendChild(randomDiv);
}


//Zadanie6

const firstDiv = document.createElement("div");
const firstSpan = document.createElement("span");
const secDiv = document.createElement("div");
const thirdDiv = document.createElement("div");
const secSpan = document.createElement("span");

firstDiv.textContent = "to jest div";
firstSpan.textContent = "to jest span";
thirdDiv.textContent = "to jest div";
secSpan.textContent = "to jest span";

secDiv.appendChild(thirdDiv);
document.body.appendChild(firstDiv);
document.body.appendChild(firstSpan);
document.body.appendChild(secDiv);
document.body.appendChild(secSpan);


//Zadanie7

const firstUl = document.createElement('ul');
const secUl = document.createElement('ul');
const firstBtn = document.createElement("button");
const secBtn = document.createElement("button");
const arr = [1, 2, 3, 4, 5, 6, 7];

firstBtn.innerText = "Move element (first list)";
firstBtn.classList = "firstBtn"
firstUl.classList = "firstUl";
secUl.classList = "secUl";
secBtn.innerText = "Move element (sec list)";

for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    li.innerText = arr[i];
    firstUl.appendChild(li);
}

document.body.appendChild(firstUl);
document.body.appendChild(secUl);
document.body.appendChild(secUl);
document.body.appendChild(firstBtn);
document.body.appendChild(secBtn);

const firstUlClass = document.querySelector('.firstUl');
const secUlClass = document.querySelector('.secUl');
const ulBtnClass = document.querySelector('.ulBtn');

firstBtn.addEventListener("click", function () {
    const ulLength = firstUl.children.length;
    secUl.append(firstUl.children[ulLength - 1]);
    if (ulLength - 1 === 0) {
        firstBtn.setAttribute("disabled", true);
    } else {
        secBtn.removeAttribute("disabled");
    }
});

secBtn.addEventListener("click", function () {
    const secUlLength = secUl.children.length;
    firstUl.append(secUl.children[secUlLength - 1]);
    if (secUlLength - 1 === 0) {
        secBtn.setAttribute("disabled", true);
    } else {
        firstBtn.removeAttribute("disabled");
    }
});


//Zadanie8

const form = document.createElement('form');
form.className = 'formClass';
const formDataList = [
    'Jaki element?',
    'Jaki tekst?',
    'Jaki kolor tekstu?',
    'Ilość?',
];
const formBtn = document.createElement('button');
formBtn.className = 'formBtn';
formBtn.type = 'submit';
formBtn.innerText = 'Create Element';
for (let i = 0; i < formDataList.length; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = formDataList[i];
    form.appendChild(input);
}
form.appendChild(formBtn);
document.body.appendChild(form);

const createUserElement = (name, text, color, quantity) => {
    for (let i = 0; i < quantity; i++) {
        const el = document.createElement(name);
        el.style.color = color;
        el.innerText = text;
        document.body.appendChild(el);
    }
};

const formTwo = document.querySelector('.formClass');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {
        currentTarget
    } = e;
    const [name, text, color, quantity] = [...currentTarget.elements].map(
        (el) => el.value
    );
    createUserElement(name, text, color, parseInt(quantity));
    form.reset();
});

const br = document.createElement('br');
document.body.appendChild(br);


//Zadanie9

const details = ["Imię", "Nazwisko", "Wiek", "Ilość dzieci"];
const mainwrapper = document.createElement("div");
const buttonMore = document.createElement("button");
const buttonCreate = document.createElement("button");
buttonMore.textContent = "Więcej";
buttonCreate.textContent = "Utwórz";
buttonMore.id = "more";
buttonCreate.id = "create";

details.forEach((item) => {
    const wrapper = document.createElement("div");
    const textDiv = document.createElement("div");
    const input = document.createElement("input");
    input.className = item;
    const br = document.createElement("br");
    textDiv.textContent = item;
    wrapper.appendChild(textDiv);
    wrapper.appendChild(input);
    wrapper.appendChild(br);

    mainwrapper.appendChild(wrapper)
})

document.body.appendChild(mainwrapper);
document.body.appendChild(buttonMore);
document.body.appendChild(buttonCreate);

buttonMore.addEventListener("click", () => {
    details.forEach((item) => {
        const wrapper = document.createElement("div");
        const textDiv = document.createElement("div");
        const input = document.createElement("input");
        input.className = item;
        const br = document.createElement("br");
        textDiv.textContent = item;
        wrapper.appendChild(textDiv);
        wrapper.appendChild(input);
        wrapper.appendChild(br);
        mainwrapper.appendChild(wrapper)
    })
})

function createButtonDelate() {
    const button = document.createElement("button");
    button.textContent = "Usuń";

    button.addEventListener("click", (e) => {
        const target = e.target;
        target.parentNode.parentNode.removeChild(target.parentNode);
    })
    return button;
}

function createField(fieldName, text) {
    const buttonDelate = createButtonDelate();
    const wrapper = document.createElement("div");
    const fieldDiv = document.createElement("div");
    const fieldValue = document.createElement("div");
    fieldDiv.textContent = fieldName + ": ";
    fieldValue.textContent = text;
    fieldValue.classList = "fieldValue";
    wrapper.appendChild(fieldDiv);
    wrapper.appendChild(fieldValue);
    wrapper.appendChild(buttonDelate);

    return wrapper;
}

buttonCreate.addEventListener("click", () => {
    const name = document.querySelectorAll(".Imię");
    const lastname = document.querySelectorAll(".Nazwisko");
    const age = document.querySelectorAll(".Wiek");
    const kids = document.querySelectorAll(".Ilość dzieci");
    const wrapper = document.createElement("div");

    for (let index = 0; index < name.length; index++) {
        const fieldName = name[index].value;
        const element = createField("Imię", fieldName);
        wrapper.appendChild(element);
    }

    for (let index = 0; index < lastname.length; index++) {
        const fieldName = lastname[index].value;
        const element = createField("Nazwisko", fieldName);
        wrapper.appendChild(element);
    }

    for (let index = 0; index < age.length; index++) {
        const fieldName = age[index].value;
        const element = createField("Wiek", fieldName);
        wrapper.appendChild(element);
    }

    for (let index = 0; index < kids.length; index++) {
        const fieldName = kids[index].value;
        const element = createField("Ilość dzieci", fieldName);
        wrapper.appendChild(element);
    }
    document.body.appendChild(wrapper);
})

//Zadanie10

function uppercaseFistLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}

const buttonUppercase = document.createElement("button");
buttonUppercase.textContent = "Pierwsza duza litera"
document.body.appendChild(buttonUppercase)

buttonUppercase.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".fieldValue");

    [...inputs].forEach((item) => {
        console.log(item.innerHTML);
        item.innerHTML = uppercaseFistLetter(item.innerHTML);
    });
})

//Zadanie11

function checkString(text) {
    const num = text.match(/[0-9]+/g);

    if (num.length > 0) {
        const convertedNum = num.map(item => Number(item));
        const sumNum = convertedNum.reduce((x, y) => x + y)
        console.log(sumNum);
        const multipliedNum = convertedNum.reduce((x, y) => x * y)

        for (let i = 0; i < multipliedNum; i++) {
            const div = document.createElement("div");
            div.textContent = text;
            document.body.appendChild(div);
        }
    }
}

checkString("csda2e2");


//Zadanie12

function stringObj(input) {
    return {
        text: input
    }
}

const sTextObj = stringObj("Random text about Ola");
sTextObj.checkFunction = function () {
    if (this.text.includes("Ala")) {
        this.text = this.text.replaceAll("Ala", "Ola");
        console.log(this.text);
    } else {
        const div = document.createElement("div");
        div.textContent = "Słowo Ala nie występuje w tekście."
        document.body.appendChild(div);
    }
}

sTextObj.checkFunction();

//Zadanie13

const stringChartQuant = (sArr) => {
    return sArr.map((el) => el.length);
};
const numSArr = stringChartQuant(['newwW', 'tet1tt', 'onENew']);
const sumNumArr = (numArr) => numArr.reduce((acc, num) => (acc += num));

console.log(sumNumArr(numSArr));

const avgNumArr = (numArr) => {
    const sum = numArr.reduce((acc, num) => (acc += num));
    return (sum / numArr.length).toFixed(2);
};

console.log(avgNumArr(numSArr));

//Zadanie14

let dataObj = {
    name: '',
    surname: '',
    age: ''
}

function changeObject(name, surname, age) {
    dataObj.name = name;
    dataObj.surname = surname;
    dataObj.age = age;

    if (name.length > 5 || surname.length > 5 || age.length > 5) {
        const button = document.createElement("button");
        button.textContent = "Reset";
        button.addEventListener("click", () => {
            dataObj.name = "";
            dataObj.surname = "";
            dataObj.age = "";
        })
        document.body.appendChild(button);
    }
}

changeObject("Piotr", "Gawelda", "55");