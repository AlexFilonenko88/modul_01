'use strict'

const yearLeap = year => year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);

const leapНear = (n, m) => {
    const result = [];

        if (n > 0 && m > 0) {
            result.push(yearLeap() * (m - n + 1) + n);
        } if (n < 0 && m < 0) {
            result.push(yearLeap() * (m - n + 1) + n);
        } if (n > m) {
            result.push(yearLeap() * (m - n + 1) + n);
        } if (n < m) {
            result.push(yearLeap() * (m - n + 1) + n);
        }

    return result;
};

console.log(leapНear(5, 3));