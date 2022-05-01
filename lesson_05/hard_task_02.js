'use strict'

const firstNumber = +prompt("Введите первое число:");
const secondNumber = +prompt("Введите второе число");

// const minNymber = (firstNumber, secondNumber) => {
//     if (firstNumber > secondNumber) {
//         return console.log(`Число ${secondNumber} минимальное`);
//     } else {
//         return console.log(`Число ${firstNumber} минимальное`);
//     };
// };

// console.log(minNymber(firstNumber, secondNumber));

const minNymber = (firstNumber, secondNumber) => {
    return firstNumber > secondNumber ? console.log(`Число ${secondNumber} минимальное`) : console.log(`Число ${firstNumber} минимальное`);
};

console.log(minNymber(firstNumber, secondNumber));