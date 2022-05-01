'use strict'

const nod = (n, m) => {
    if (m > 0) {
        let k = n % m;
        return nod(m, k);
    } else {
        return Math.abs(n);
    };
};

console.log(nod(10, 5));