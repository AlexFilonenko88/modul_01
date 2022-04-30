'use strict'

// 1

const income = prompt("Введите Ваш доход: ");
const TAX13 = 0.13;
const TAX20 = 0.2;
const TAX30 = 0.3;

if (income < 15000) {
    console.log(income * TAX13);
} else if (income >= 15000 && income < 50000) {
    console.log(income * TAX20)
} else {
    console.log(income * TAX30);
};

// switch (income) {
//     case income < 15000:
//         console.log(income * TAX13);
//         break;
//     case income >= 15000 && income < 50000:
//         console.log(income * TAX20);
//         break;
//     case income >= 50000:
//         console.log(income * TAX30);
//         break;
// };