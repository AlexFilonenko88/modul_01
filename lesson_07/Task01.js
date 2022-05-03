'use strict'

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров','Смирнов', 'Попов'];


const filter = (array1, array2) => {    
    return array1.filter(elem => !~array2.indexOf(elem));
};

console.log(filter(allStudents, failedStudents));
