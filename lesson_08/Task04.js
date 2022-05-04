'use strict'

const leapНear = (n, m) => {
    const randomNumber = [];
    
    // алгоритм опеределения високосного года
    if (year % 400 === 0) {
        leap = true;
    } else if (year % 100 === 0) { 
    leap = false;
    } else if (year % 4 === 0){
    leap = true;
    } else {
    leap = false;
    };    
    
    // результат в массив
    if (leap === true) {
        randomNumber.push(Math.round(Math.random() * (m - n + 1) + n));
    }
};

console.log(leapНear(1800, 2010));