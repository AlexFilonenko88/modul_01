'use strict'

const userNumber = +prompt("Введите любое число:");
const randomNumber = Math.round(Math.random() * 100);

const y = (userNumber) => {

    for(let i = 0; i < 5; i += 1) {
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

        i = 0;
    }
};

console.log(y(userNumber));