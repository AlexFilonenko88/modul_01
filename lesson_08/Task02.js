'use strict'

const randomNumberGenerator = (n, m, x) => {
    const result = [];
    
    for (let i = 0; i < x; i +=1) {
        if (n > 0 && m > 0) {
            result.push(Math.round(Math.random() * (m - n + 1) + n));
        } if (n < 0 && m < 0) {
            result.push(Math.round(Math.random() * (m - n + 1) + n));
        } if (n > m) {
            result.push(Math.round(Math.random() * (m - n + 1) + n));
        }if (n < m) {
            result.push(Math.round(Math.random() * (m - n + 1) + n));
        } 
        
    }

    return result;
};

console.log(randomNumberGenerator(-5, 12, 2));