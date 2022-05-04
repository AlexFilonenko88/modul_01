'use strict'

const randomNumberGenerator = (x) => {
    const randomNumber = [];

    randomNumber.push(Math.round(Math.random() * 100));

    return randomNumber;
};

console.log(randomNumberGenerator(2));