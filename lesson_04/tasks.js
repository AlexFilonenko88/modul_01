'use strict'

// 1

const rain = Math.round(Math.random());

if (rain === 1) {
    console.log("Пошёл дождь. Возьмите зонт!");
} else {
    console.log("Дождя нет!");
}

// Math.random() >= 0.5 ? console.log("Пошёл дождь. Возьмите зонт!") : console.log("Дождя нет!");

// 2

const numberOfPointsMath = prompt("Введите кол-во баллов по математике:");
const numberOfPointsRussianLanguage = prompt("Введите кол-во баллов по русскому языку:");
const numberOfPointsComputerScience = prompt("ведите кол-во баллов по информатике:");
const totalPoints = numberOfPointsMath + numberOfPointsRussianLanguage + numberOfPointsComputerScience;
const POINTS = 265;

if (totalPoints >= POINTS) {
    alert("Поздравляю, вы поступили на бюджет!");
} else {
    alert("Не достаточно баллов!");
};

// 3

const cash = prompt("Какую сумму желаете снять?");
const MINBANKNOTE = 100; 

if (cash >= MINBANKNOTE) {
    console.log("Получите ваши деньги!")
} else {
    console.log("Неправелнный ввод. Минимальная купюра 100р.")
}