//Zadanie1:

const buz = document.querySelector("#buz");
const baz = document.querySelector("#baz");
const foo = document.querySelector("#foo");

console.log(buz.parentElement);
console.log(baz.previousElementSibling);
console.log(foo.children);
console.log(foo.parentNode);
console.log(foo.firstChild);
console.log(foo.children[Math.floor(foo.children.length / 2)]);


//Zadanie2:

function clickListener(element) {
  element.addEventListener("click", (event) => {
    console.log(event.target.textContent);
  });
}

clickListener(document.getElementById("ex2"));

//Zadanie3:

const ex3Divs = document.querySelectorAll("#ex3 button");

ex3Divs.forEach((div) => {
  div.addEventListener("click", (event) => {
    const sibling = event.target.nextElementSibling;

    if (sibling.style.display === "none") {
      sibling.style.display = "block";
    } else {
      sibling.style.display = "none";
    }
  });
});

//Zadanie4:

ex3Divs.forEach((div) => {
  div.addEventListener("click", (event) => {
    const parentElement = event.target.parentElement;
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    parentElement.style.backgroundColor = randomColor;
  });
});

//Zadanie5:

const ex5Divs = document.querySelectorAll("#ex5 div");
const ex5ListItems = document.querySelectorAll("#ex5 li");
const ex5EvenListItems = document.querySelectorAll("#ex5 li:nth-child(even)");

ex5Divs.forEach((div) => {
  div.addEventListener("mouseenter", (event) => {

    // 1:
    ex5ListItems[0].style.backgroundColor = event.target.style.backgroundColor;

    // 2:
    ex5ListItems[ex5ListItems.length - 1].style.backgroundColor = event.target.style.backgroundColor;

    // 3:
    ex5EvenListItems.forEach((item) => {
      item.style.backgroundColor = event.target.style.backgroundColor;
    });

    // 4:
    ex5ListItems.forEach(item => {
      item.style.backgroundColor = event.target.style.backgroundColor;
    });

    // 5:
    event.target.parentElement.lastElementChild.style.backgroundColor =
      event.target.style.backgroundColor;
  });
});

//Zadanie6:

const ex6 = document.getElementById("ex6");

const first = ex6.firstElementChild.firstElementChild.firstElementChild;

const second =
  ex6.firstElementChild.parentElement.firstElementChild.firstElementChild
    .nextElementSibling.parentElement;

const third =
  ex6.parentElement.firstElementChild.parentElement.children[1]
    .firstElementChild.firstElementChild.firstElementChild;


console.log(first);
console.log(second);
console.log(third);