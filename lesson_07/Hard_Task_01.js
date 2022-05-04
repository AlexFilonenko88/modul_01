'use strict'

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = (array) => {
    let productQuantity = 0;
    let totalAmount = 0;

    for (let value of array) {
        for (let i = 0; i < value.length; i += 1){
            productQuantity += value[0];
            totalAmount += value[1];
        };
    };

    return Math.round(totalAmount / productQuantity);
};

console.log(getAveragePriceGoods(allСashbox));