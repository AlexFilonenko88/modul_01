'use strict'

const COSTOFONEDOLLAR = 73;
const COSTOFONEEURO = 1.2 * COSTOFONEDOLLAR;

const currencyСonverter = euro => euro * COSTOFONEEURO;

console.log(currencyСonverter(10));