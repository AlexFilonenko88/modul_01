'use strict'

const userNumber = +prompt("Введите любое число:");
const randomNumber = Math.round(Math.random() * 100);
const inputUserNumber = [];
let x = inputUserNumber.join('');
let q = Number(x);

const y = (userNumber) => {

    if (userNumber === randomNumber * 0.3) { // ???
        return; 
    } if (userNumber > randomNumber) {
        inputUserNumber.push(userNumber);
        alert("Меньше!");
        const userNumber = +prompt("Введите любое число:");
    } if (userNumber < randomNumber) {
        alert("Больше!");
        userNumber = +prompt("Введите любое число:");
    } if (userNumber === randomNumber) {
        alert("Правильно!");
    } if (userNumber === q) {   // ???
        alert("Это число вы уже вводили");
    } if (randomNumber >= 50 && randomNumber <= 100) { // ???
        
    }  else {
        alert("Введите число!");
    }

};

console.log(y(userNumber));
