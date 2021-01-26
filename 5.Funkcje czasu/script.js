//Zadanie1

let time = 0;
const interval = setInterval(() => {
    time += 1;
    console.log(`Cześć po raz ${time}`);
    if (time >= 15) {
        clearInterval(interval);
    }
}, 3000);


//Zadanie2

let arr = [1, 2, 3, 4, 5, 6, 7];
let timer = setTimeout(() => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    let j = 0
    let anotherInterval = setInterval(() => {
        console.log(arr[j]);
        j++
        if (j >= arr.length) {
            clearInterval(anotherInterval);
        }
    }, 3000)

}, 2000)