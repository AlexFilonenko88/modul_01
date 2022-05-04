'use strict'

const randomNumberGenerator = (n, m, l) => {
    const randomNumber = [];

    if (n > 0 && m > 0) {
        randomNumber.push(Math.round(Math.random() * (m - n + 1) + n));
    } else if (l === 'even') {
        randomNumber.push(Math.round(Math.random() * (m - n + 1) + n) % 2 === 0);
    }  else if (l === 'odd') {
        randomNumber.push(Math.round(Math.random() * (m - n + 1) + n) % 2 !== 0);
    } else {
        console.log("Введен отрицательный дипазон");
    }
    return randomNumber;
};

console.log(randomNumberGenerator(5, 6, 'even'));
// console.log(randomNumberGenerator(5, 2, 'odd'));