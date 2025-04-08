"use strict";
function isPrime(n) {
    if (n < 2)
        return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function TheFinalResult() {
    const Ele = document.getElementById("ser");
    const btn = document.getElementById("btn");
    const Show = document.getElementById("show");
    if (!Ele || !Show)
        return;
    btn.addEventListener("click", () => {
        Show.innerHTML = "";
        const inpuNumber = Ele.value.split("-");
        const ArrayOfnumber = [];
        inpuNumber.forEach(i => {
            if (!isNaN(parseInt(i)))
                ArrayOfnumber.push(parseInt(i));
        });
        const PrimeNumber = ArrayOfnumber.find(e => isPrime(e));
        if (PrimeNumber !== undefined) {
            console.log(`Founded`);
        }
        else {
            console.log(`Not Founded any Prime Number`);
        }
        const ShowThePrimeNumber = ArrayOfnumber.filter(e => isPrime(e));
        ShowThePrimeNumber.forEach(i => {
            const r = document.createElement("tr");
            const c = document.createElement("td");
            c.textContent = i.toString();
            r.appendChild(c);
            Show.appendChild(r);
        });
    });
}
TheFinalResult();
//# sourceMappingURL=Q1.js.map