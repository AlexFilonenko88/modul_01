'use strict'

const modifiedString = (str) => {
    // if (typeof str !== 'string') {
    //     console.log("Это не строка");
    // };

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(modifiedString("привет Мир"));