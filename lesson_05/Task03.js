'use strict'

const reverseString = (str) => {
    let reverse = '';

    for (let i = str.length - 1; i >=0 ; i -= 1){
        reverse += str[i];
    }

    return reverse;
}

console.log(reverseString("Привет мир!"));