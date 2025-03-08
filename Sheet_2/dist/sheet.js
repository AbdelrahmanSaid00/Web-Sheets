"use strict";
function addition(num, num2, num3) {
    return num + num2 + (num3 !== null && num3 !== void 0 ? num3 : 0);
}
function subtraction(n1, n2, n3) {
    return n1 - n2 - (n3 !== null && n3 !== void 0 ? n3 : 0);
}
function multiplication(n1, n2, n3) {
    return n1 * n2 * (n3 !== null && n3 !== void 0 ? n3 : 1);
}
function division(n1, n2, n3) {
    if (n2 === 0 || (n3 !== null && n3 !== void 0 ? n3 : 1) && n3 === 0) {
        return "It is undefined";
    }
    return n1 / n2 / (n3 !== null && n3 !== void 0 ? n3 : 1);
}
function remainder(n1, n2) {
    return n1 % n2;
}
console.log(addition(12, 32));
console.log(subtraction(12, 32));
console.log(multiplication(12, 32));
console.log(division(12, 32));
console.log(remainder(12, 32));
//# sourceMappingURL=sheet.js.map