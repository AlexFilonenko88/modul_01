'use strict'

const DISCOUNT3 = 0.03;
const DISCOUNT10 = 0.1;
const DISCOUNT15 = 0.15;
const DISCOUNT500 = 500;
let totalOfAllDiscounts = 0;



const calculate = (totalAmount, numberOfProducts, promoCode) => {
    if (numberOfProducts >= 10) {
        totalOfAllDiscounts += totalAmount * DISCOUNT3;
    }
    if (totalAmount >= 30000) {
        totalOfAllDiscounts += totalAmount * DISCOUNT15;
    }
    if (promoCode === "METHED") {
        totalOfAllDiscounts += totalAmount * DISCOUNT10;
    }
    if ((totalAmount - totalOfAllDiscounts) > 2000 && promoCode === "G3H2Z1"){
        totalOfAllDiscounts += totalAmount - DISCOUNT500;
    }

    return totalAmount - totalOfAllDiscounts;
};

console.log(calculate(1000, 12, "G3H2Z1"));