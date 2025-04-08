"use strict";
let ArrayOfString = ['aba', 'daba', 'asadsad', 'no'];
const unique = ArrayOfString.filter(word => !word.split('').find((c, index, ArrayOfString) => ArrayOfString.indexOf(c) !== index));
console.log(unique);
//# sourceMappingURL=Q1.js.map