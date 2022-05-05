'use strict'

const leapНear = (n, m) => {
    const randomNumber = [];
    const yearLeap = year => year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);

    for (let i = 0; i < yearLeap; i += 1) {
        randomNumber.map(yearLeap);
    };

    randomNumber.map(item => );

//    for (let i = 0; i < x; i +=1) {
//         if (n > 0 && m > 0) {
//             result.push(Math.round(Math.random() * (m - n + 1) + n));
//         } if (n < 0 && m < 0) {
//             result.push(Math.round(Math.random() * (m - n + 1) + n));
//         } if (n > m) {
//             result.push(Math.round(Math.random() * (m - n + 1) + n));
//         }if (n < m) {
//             result.push(Math.round(Math.random() * (m - n + 1) + n));
//         } 
        
//     }

    return randomNumber;
};

console.log(leapНear(5, 10));