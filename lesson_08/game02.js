'use strict'

// бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
// бот запоминает каждое число которое ввел пользователь и записывает в массив
// бот отграничивает количество попыток до 30% от количества цифр в диапазоне
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается

const userNumber = +prompt("Введите любое число:");
const randomNumber = Math.round(Math.random() * 100);
const inputUserNumber = [];

const y = (userNumber) => {

        if (userNumber > randomNumber) {
            alert("Меньше!");
            const userNumber = +prompt("Введите любое число:");
            inputUserNumber.push(userNumber);
        } else if (userNumber < randomNumber) {
            alert("Больше!");
            userNumber = +prompt("Введите любое число:");
            inputUserNumber.push(userNumber);
        } else if (userNumber === randomNumber) {
            alert("Правильно!");
        } else {
            alert("Введите число!");
        }

};

console.log(y(userNumber));
