'use strict'

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (x, y) => {
    const namesMr = [];

    for (let i = 0; i < x.length; i += 1){
        namesMr.push(y + ' ' + x[i]);
    }

    return namesMr;
};

console.log(addPrefix(names, 'Mr'));