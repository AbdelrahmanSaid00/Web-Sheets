// Question 1 of sheet 2 TS Simple Calculater

/*
const Number1 = document.getElementById("num1") as HTMLInputElement;
const Number2 = document.getElementById("num2") as HTMLInputElement;

const add = document.getElementById("Sum") as HTMLButtonElement;
const Sub = document.getElementById("sub") as HTMLButtonElement;
const Mul = document.getElementById("Mul") as HTMLButtonElement;
const Dev = document.getElementById("Dev") as HTMLButtonElement;

const Result = document.getElementById("data") as HTMLOutputElement;

function AddNumber () {
    const a1 = parseFloat(Number1.value);
    const a2 = parseFloat(Number2.value);
    let Res = a1+a2;
    Result.textContent = `The result is :` + Res.toString();
}
add.addEventListener("click" , AddNumber);
function SubtractionNumber () {
    const a1 = parseFloat(Number1.value);
    const a2 = parseFloat(Number2.value);
    let Res = a1-a2;
    Result.textContent = `The result is :` + Res.toString();
}
Sub.addEventListener("click" , SubtractionNumber);
function multiplicationNumber () {
    const a1 = parseFloat(Number1.value);
    const a2 = parseFloat(Number2.value);
    let Res = a1*a2;
    Result.textContent = `The result is :` + Res.toString();
}
Mul.addEventListener("click" , multiplicationNumber);
function DevisinNumber () {
    const a1 = parseFloat(Number1.value);
    const a2 = parseFloat(Number2.value);
    if(a2==0) {
        Result.textContent = `It is Imposible`;
    }else {
        let Res = a1/a2;
        Result.textContent = `The result is :` + Res.toString();
    }
}
Dev.addEventListener("click" , DevisinNumber);
*/
interface MathOperations {
    add(a:number , b:number):number,
    sub(a:number , b:number):number,
    mul(a:number , b:number):number,
    dev(a:number , b:number):number | string,
    rem(a:number , b:number):number | string ,
}

const Calculter : MathOperations = {
    add:(a, b)=> a+b,
    sub:(a, b)=> a+b,
    mul:(a, b)=> a+b,
    dev:(a, b)=> (b!=0)?a/b : "Error !",
    rem:(a, b)=> (b!=0)?a%b : "Error !"
};

function calculate (): void {
    const N1 = document.getElementById("num1") as HTMLInputElement;
    const N2 = document.getElementById("num2") as HTMLInputElement;
    let res = document.getElementById("data") as HTMLOutputElement;
    const NumO = parseFloat(N1.value);
    const NumT = parseFloat(N2.value);
    const Erro = document.getElementById("data") as HTMLOutputElement;

    if(isNaN(NumO) || isNaN(NumT)) {
        Erro.textContent = "Plase Enter Valid Numbers";
        return;
    }
    if(NumT===0) {
        Erro.textContent = "Number two is : Zero , so it is Imposible to make Devision";
        return;
    }else {
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
document.getElementById("calculate")?.addEventListener("click" , calculate);
