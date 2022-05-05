'use strict'

const randomNumberGenerator = (x) => {
    const randomNumber = [];

    for (let i = 0; i < x; i +=1) {
        randomNumber.push(Math.round(Math.random() * 100));
    }

    return randomNumber;
};

console.log(randomNumberGenerator(5));