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
        
    }
    else {
        alert("Введите число!");
    }

};

console.log(y(userNumber));
