'use strict'

// Необходимо написать функцию, которая принимает 2 параметра n и m

// И возвращает массив с високосными годами в диапазоне между n и m

// Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора

// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

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