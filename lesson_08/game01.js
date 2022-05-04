'use strict'

const userNumber = +prompt("Введите любое число:");
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

const y = (userNumber) => {
    if (userNumber > randomNumber) {
        alert("Меньше!");
        const userNumber = +prompt("Введите любое число:");
    } else if (userNumber < randomNumber) {
        alert("Больше!");
        userNumber = +prompt("Введите любое число:");
    } else if (userNumber === randomNumber) {
        alert("Правильно!");
    } else {
        alert("Введите число!");
    }
};

console.log(y(userNumber));