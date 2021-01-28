//Zadanie1

//1

const btn = document.querySelector("#test-event");
btn.addEventListener("click", function (e) {
    console.log(e.type);
})

//2
addEventListener("mousemove", function (e) {
    console.log(e.type);
})

//3
btn.addEventListener("mouseover", function (e) {
    console.log(e.type);
})

//4
addEventListener("keypress", function (e) {
    console.log(e.type);
})

//5
addEventListener("scroll", function (e) {
    console.log(e.type);
})

//6
document.querySelector("#test-event").addEventListener("change", function (e) {
    console.log(e.type);
})


//Zadanie2

function changeText() {

    const ex2 = document.querySelector("#ex2");

    ex2.addEventListener("click", function (e) {
        const valueText = e.target.dataset.text;
        const belowText = e.target.nextElementSibling;

        belowText.innerText = valueText;
    })

}

changeText();


//Zadanie3

function changeColor() {

    const ex3 = document.querySelector("#ex3");

    ex3.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = "blue";
    });

    ex3.addEventListener("mouseout", function (e) {
        e.target.style.backgroundColor = "red";
    })
}

changeColor();


//Zadanie4

const inputErr = document.querySelector("#ex3-err");
const input = document.querySelector("#input-test");

input.addEventListener("keyup", function (e) {
    const reg = /[0-9]/;
    const checkIfNum = e.target.value.match(reg);

    if (checkIfNum !== null) {
        inputErr.innerHTML = "Nie mozna wpisywac liczb";
    } else {
        input.innerText = "";
    }
})


//Zadanie5

// const ex5 = document.querySelector("#ex5");
// const btnEx5 = document.querySelector("#ex5-button");

// let numClick = 0;

// btnEx5.addEventListener("click", function counting() {
//     numClick++;

//     if(numClick == 10) {
//         btnEx5.removeEventListener("click", counting)
//     } else {
//         ex5.innerHTML = numClick;
//     }
// });


//Zadanie6

function scrollPosition() {
    document.addEventListener("scroll", function (e) {
        let position = window.scrollY;
        let body = document.querySelector("body");

        if (position > 200) {
            body.style.backgroundColor = "red";
        } else {
            body.style.backgroundColor = "white";
        }
    })
}

scrollPosition();


//Zadanie7

const calcInput = document.querySelector("div#calculator > input");
const buttons = document.querySelectorAll("div#calculator button");

let num1 = 0;
let num2 = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (this.innerText === "+") {
            calcInput.value = num1 + num2;
            num1 = 0;
            num2 = 0;
        } else if(this.innerText === "-") {
            calcInput.value = num1 - num2;
            num1 = 0;
            num2 = 0;
        } else if(this.innerText === "*") {
            calcInput.value = num1 * num2;
            num1 = 0;
            num2 = 0;
        } else if(this.innerText === "/") {
            calcInput.value = num1 / num2;
            num1 = 0;
            num2 = 0;
        } else {
            if(num1 === 0) {
                calcInput.value = "";
                num1 = Number(this.innerText);
            } else {
                calcInput.value = "";
                num2 = Number(this.innerText);
            }
        }
    })
}