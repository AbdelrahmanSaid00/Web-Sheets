"use strict";
const Tem = document.getElementById("cal");
const fahrenInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const Bothin = document.getElementById("both");
const btncon = document.getElementById("btnconvert");
const res = document.getElementById("data");
function ConvertTem() {
    const Num = parseFloat(Tem.value);
    if (isNaN(Num)) {
        
        res.textContent = "❌ Please enter a valid number!";
        return;
    }
    let restext = `<p>🌡 Temperature: ${Num}°C</p>`;
    if (fahrenInput.checked) {
        const fah = (Num * 9 / 5) + 32;
        restext += `<p>🔥 Fahrenheit: ${fah.toFixed(2)}°F</p>`;
    }
    if (kelvinInput.checked) {
        const kel = Num + 273.15;
        restext += `<p>🔥 Kelvin: ${kel.toFixed(2)}°K</p>`;
    }
    if (Bothin.checked) {
        const fah = (Num * 9 / 5) + 32;
        const kel = Num + 273.15;
        restext += `<p>🔥 Fahrenheit: ${fah.toFixed(2)}°F</p>` + `<p>🔥 Kelvin: ${kel.toFixed(2)}°K</p>`;
    }
    if (!fahrenInput.checked && !kelvinInput.checked && !Bothin.checked) {
        restext = "⚠️ Please select a conversion option!";
    }
    res.innerHTML = restext;
}
btncon.addEventListener("click", ConvertTem);
//# sourceMappingURL=Q2.js.map