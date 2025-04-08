"use strict";
var _a;
;
function SubmitOrder() {
    const NameInput = document.getElementById("pizza");
    const SizeOfPizza = document.getElementById("size");
    const checkboxorder = document.querySelectorAll("input[type=checkbox]:checked");
    const ErrorMaggage = document.getElementById("Error");
    let invalid = true;
    if (!NameInput.value) {
        invalid = false;
    }
    else {
        ErrorMaggage.textContent = "";
    }
    if (!SizeOfPizza.value) {
        invalid = false;
    }
    else {
        ErrorMaggage.textContent = "";
    }
    if (!invalid) {
        ErrorMaggage.textContent = "Please Check of Name and Size";
        return;
    }
    const toping = [];
    for (let i = 0; i < checkboxorder.length; i++) {
        toping.push(checkboxorder[i].value);
    }
    const order = {
        CustomarName: NameInput.value,
        Size: SizeOfPizza.value,
        Topping: toping,
    };
    window.alert(`Order is preparing The Name is : ${order.CustomarName} , the size fo the pizza is ${order.Size} and the Toppling is ${order.Topping.join(".") || "None"} `);
}
(_a = document.getElementById("btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", SubmitOrder);
//# sourceMappingURL=Q3.js.map