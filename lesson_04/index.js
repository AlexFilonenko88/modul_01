'use strict'

const productName = prompt("Наименование товара:","");
const quantityOfGoods = prompt("Количество товара:")
const productCategory = prompt("Категория товара:")
const priceOfGoods = prompt("Цена товара:")

if (typeof quantityOfGoods === 'number' && typeof priceOfGoods === 'number') {
    console.log(`На складе ${quantityOfGoods} единицы товара ${productName}, на сумму ${quantityOfGoods * priceOfGoods} деревянных`);
} else {
    console.log("Вы ввели некорректные данные");
};

