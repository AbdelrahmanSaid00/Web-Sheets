"use strict";
function SplitStirng(thestring, thesize) {
    if (thesize < 0) {
        return `Error`;
    }
    else if (thesize == 0) {
        return thestring.slice(0);
    }
    const therseult = [];
    for (let i = 0; i < thestring.length; i += thesize) {
        therseult.push(thestring.slice(i, i + thesize));
    }
    return therseult;
}
console.log(SplitStirng("HelloWorld!", 3));
console.log(SplitStirng("HelloWorld!", -1));
console.log(SplitStirng("", 1));
console.log(SplitStirng("HelloWorld!", 0));
//# sourceMappingURL=q4.js.map