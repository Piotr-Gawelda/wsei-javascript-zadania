//Zadanie1

function itWork() {
    console.log('Udalo sie');
}

itWork();

//Zadanie2

function paramFunction(param) {
    console.log(param);
}

paramFunction("Udalo sie " + 777);

//Zadanie3

function arrayFunction(arr) {
    return arr;
}

console.log(arrayFunction([1, 2, 3, 4, 5, 6, 7]))

//Zadanie4

function randomString(str) {

    let count = 0;

    let simpleInterval = setInterval(() => {
        count++;
            if (count == 5) {
                console.log('Koniec');
                clearInterval(simpleInterval);
            } else {
                console.log(str);
            }

        }, 3000);
    }

    randomString('Random text');