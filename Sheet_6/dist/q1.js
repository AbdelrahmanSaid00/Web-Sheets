"use strict";
let ArrayOfNumber = [1, 2, 2, 3, 3, 3, 1, 2, 2, 2, 3, 4, 5, 6];
function removeDubel(a) {
    let answer = [];
    for (let i = 0; i < a.length; i++) {
        let cnt = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[i] == a[j]) {
                cnt++;
            }
        }
        if (cnt < 3 && !answer.includes(a[i])) {
            answer.push(a[i]);
        }
    }
    return answer;
}
console.log(removeDubel(ArrayOfNumber));
//# sourceMappingURL=q1.js.map