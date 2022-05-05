'use strict'

const randomNumberGenerator = (n, m, x, l) => {
    const result = [];

    let min = 0;
    let max = 0;

    if (n < m) {
        min = n;
        max = m;
    } else {
        min = m;
        max = n;
    };

    for (let i = 0; i < x; i += 1) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    };

    if (l === 'even') {
        return result.filter(item => item % 2 === 0);
    };
    if (l === 'odd') {
        return result.filter(item => item % 2 !== 0);
    };

    return result;
};

console.log(randomNumberGenerator(1, 6, 2, 'even'));
console.log(randomNumberGenerator(5, 2, 2, 'odd'));