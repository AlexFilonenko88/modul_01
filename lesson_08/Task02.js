'use strict'

const randomNumberGenerator = (n, m) => {
    const randomNumber = [];

    if (n > 0 && m > 0) {
        randomNumber.push(Math.round(Math.random() * (m - n + 1) + n));
    } else {
        console.log("Введен отрицательный дипазон");
    }
    return randomNumber;
};

console.log(randomNumberGenerator(5, 2));