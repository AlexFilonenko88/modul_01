'use strict'

const isPrime = number => {
    for (let i = 2; i <= number/2; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime());