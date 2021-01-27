//Zadanie1
var getLi = document.getElementsByClassName('list');

console.log(getLi);

//Zadanie2
function tagElements(tag) {
    const elements = document.getElementsByTagName(tag);
    for (let i = 0; i<elements.length; i++) {
        console.log(elements[i]);
    }
}

tagElements('ul');

//Zadanie3

const listElement = document.querySelector('#list');

console.log(listElement);



//Zadanie4

function showElements(elements) {
	for(let i = 0; i < elements.length; i++) {
		console.log(elements[i]);
	}
}

showElements(document.querySelectorAll('li'))
showElements(document.querySelectorAll('ul'))
showElements(document.querySelectorAll('span'))
showElements(document.querySelectorAll('div.list span'))
showElements(document.querySelectorAll('div#spans span'))