'use strict'

const randomNumberGenerator = (n, m, x, l) => {
    const result = [];

    for (let i = 0; i < x; i += 1) {
        if (l === 'even') {
             result.push(Math.round(Math.random() * (m - n + 1) + n) % 2 === 0);
        }if (l === 'odd') {
             result.push(Math.round(Math.random() * (m - n + 1) + n) % 2 !== 0);
        } if (n > 0 && m > 0) {
            result.push(Math.round(Math.random() * (m - n + 1) + n));
        } if (n < 0 && m < 0) {
            result.push(Math.round(Math.random() * (m - n + 1) + n));
        } if (n > m) {
            result.push(Math.round(Math.random() * (m - n + 1) + n));
        } if (n < m) {
            result.push(Math.round(Math.random() * (m - n + 1) + n));
        } 
        
    }

    return result;
};

console.log(randomNumberGenerator(1, 6, 2, 'even'));
console.log(randomNumberGenerator(5, 2, 2, 'odd'));