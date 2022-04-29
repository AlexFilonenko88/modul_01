'use strict'

const productName = prompt("Наименование товара:","");
const quantityOfGoods = prompt("Количество товара:")
const productCategory = prompt("Категория товара:")
const priceOfGoods = prompt("Цена товара:")


console.log(`На складе ${quantityOfGoods} единицы товара ${productName}, на сумму ${quantityOfGoods * priceOfGoods} деревянных`);

