'use strict'

// 1

const income = +prompt("Введите Ваш доход: ");
const TAX13 = 0.13;
const TAX15 = 0.15;
const TAX20 = 0.2;
const TAX25 = 0.25;
const TAX30 = 0.3;

if (income < 15000) {
    console.log("Сумма налога:", income * TAX13);
} if (income >= 15000 && income <= 15999) {
    console.log("Сумма налога:", income * TAX15);
} if (income >= 16000 && income < 50000) {
    console.log("Сумма налога:", income * TAX20)
} if (income >= 50000 && income < 59999) {
    console.log("Сумма налога:", income * TAX25)
} if (income >= 60000) {
    console.log("Сумма налога:", income * TAX30);
};