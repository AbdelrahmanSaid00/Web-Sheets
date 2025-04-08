"use strict";
var _a;
const Calculter = {
    add: (a, b) => a + b,
    sub: (a, b) => a + b,
    mul: (a, b) => a + b,
    dev: (a, b) => (b != 0) ? a / b : "Error !",
    rem: (a, b) => (b != 0) ? a % b : "Error !"
};
function calculate() {
    const N1 = document.getElementById("num1");
    const N2 = document.getElementById("num2");
    let res = document.getElementById("data");
    const NumO = parseFloat(N1.value);
    const NumT = parseFloat(N2.value);
    const Erro = document.getElementById("data");
    if (isNaN(NumO) || isNaN(NumT)) {
        Erro.textContent = "Plase Enter Valid Numbers";
        return;
    }
    if (NumT === 0) {
        Erro.textContent = "Number two is : Zero , so it is Imposible to make Devision";
        return;
    }
    else {
        Erro.textContent = "";
    }
    res.innerHTML = `
        <tr style="background-color: blue; font-weight: bold;">
            <th>Operation</th>
            <th>Result</th>
        </tr>
        <tr><td>Addition</td><td>${Calculter.add(NumO, NumT)}</td></tr>
        <tr><td>Subtraction</td><td>${Calculter.sub(NumO, NumT)}</td></tr>
        <tr><td>Multiplication</td><td>${Calculter.mul(NumO, NumT)}</td></tr>
        <tr><td>Division</td><td>${Calculter.dev(NumO, NumT)}</td></tr>
        <tr><td>Remainder</td><td>${Calculter.rem(NumO, NumT)}</td></tr>
    `;
}
(_a = document.getElementById("calculate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", calculate);
//# sourceMappingURL=Q1.js.map