'use strict'

// 1

const income = +prompt("Введите Ваш доход: ");
const TAX13 = 0.13;
const TAX20 = 0.2;
const TAX30 = 0.3;

if (income < 15000) {
    console.log(income * TAX13);
} if (income >= 15000 && income < 50000) {
    console.log(income * TAX20)
} if(income >= 50000) {
    console.log(income * TAX30);
};

// switch (true) {
//     case income < 15000:
//         console.log(income * TAX13);
//         break;
//     case income >= 15000 && income < 50000:
//         console.log(income * TAX20);
//         break;
//     case income >= 50000:
//         console.log(income * TAX30);
//         break;
//     default:
//         console.log('default');
// };