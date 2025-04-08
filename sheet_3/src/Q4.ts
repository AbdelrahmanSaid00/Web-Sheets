// Question 4 Factors of the Number
const NUmber = document.getElementById("num") as HTMLInputElement;
const Display = document.getElementById("btn") as HTMLButtonElement;
const table = document.getElementById("table") as HTMLTableElement;

function FindFactors () {
    const P = parseFloat(NUmber.value);

    if(isNaN(P) || P < 0) {
        console.log("Error Please Enter Positive Number");
        return;
    }
    let ArrayOfFactor: number[]  =[]; // Empty
    for(let i =1 ; i <= P ; i++) {
        if(P % i === 0) {
            ArrayOfFactor.push(i);
        }
    }
    let Valid = false; // to Know  if the number is Even or Odd
    if(P % 2 == 0) {
        Valid = true;
    }
    MakeTable(ArrayOfFactor);

    if(ArrayOfFactor.length % 2 == 0) {
        table.style.backgroundColor = "red";
    }else {
        table.style.backgroundColor = "green";
    }
    console.log(ArrayOfFactor.length);
}

function MakeTable (ArrayOfFactor:number[]) {
    table.innerHTML = "<tr> <tr> <strong> Factors </strong> </tr> </tr>";
    
    ArrayOfFactor.forEach(v => {
        const r = document.createElement("tr");
        const c = document.createElement("td");
        c.textContent = v.toString();
        r.appendChild(c);
        table.appendChild(r);
    });
    table.removeAttribute("style");
}

Display.addEventListener("click" , FindFactors);
