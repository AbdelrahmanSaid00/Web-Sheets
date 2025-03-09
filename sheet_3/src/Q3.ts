// Question 3 of sheet 3 TS pizza ordering
interface Pizza {
    CustomarName:string,
    Size:string,
    Topping :string [];
};

function SubmitOrder () {
    const NameInput = document.getElementById("pizza") as HTMLInputElement;
    const SizeOfPizza = document.getElementById("size") as HTMLInputElement;
    const checkboxorder = document.querySelectorAll("input[type=checkbox]:checked"); // it take all items that you are selet it from the checkbox
    const ErrorMaggage = document.getElementById("Error") as HTMLSpanElement;

    let invalid=true;
    if(!NameInput.value) {
        invalid = false;
    }else {
        ErrorMaggage.textContent ="";
    }

    if(!SizeOfPizza.value) {
        invalid = false;
    }else {
        ErrorMaggage.textContent="";
    }

    if(!invalid) {
        ErrorMaggage.textContent= "Please Check of Name and Size";
        return;
    }
    const toping:string[] = [];
    for(let i =0 ; i < checkboxorder.length ;i++) {
        toping.push((checkboxorder[i] as HTMLInputElement).value);
    }
    const order:Pizza = {
        CustomarName: NameInput.value,
        Size: SizeOfPizza.value,
        Topping: toping,
    };
    window.alert(`Order is preparing The Name is : ${order.CustomarName} , the size fo the pizza is ${order.Size} and the Toppling is ${order.Topping.join(".") || "None"} `)
}
document.getElementById("btn")?.addEventListener("click" , SubmitOrder);
