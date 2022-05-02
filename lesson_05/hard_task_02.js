'use strict'

const firstNumber = +prompt("Введите первое число:");
const secondNumber = +prompt("Введите второе число");

const minNymber = (firstNumber, secondNumber) => {
    return firstNumber > secondNumber
        ? `Число ${secondNumber} минимальное`
        : `Число ${firstNumber} минимальное`;
};

console.log(minNymber(firstNumber, secondNumber));