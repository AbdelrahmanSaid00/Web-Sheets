const FormRegister  = document.getElementById("form-valid") as HTMLFormElement;
const UsernameInput = document.getElementById("name")       as HTMLInputElement;
const passwordInput = document.getElementById("pass")       as HTMLInputElement;
const SelectInput   = document.getElementById("semester")   as HTMLSelectElement;
const IsComp102     = document.getElementById("comp102")    as HTMLInputElement;
const IsComp206     = document.getElementById("comp206")    as HTMLInputElement;
const IsMath102     = document.getElementById("math102")    as HTMLInputElement;
const button        = document.getElementById("btn")        as HTMLButtonElement;
const Sign          = document.getElementById("sign")       as HTMLInputElement;
const UserError     = document.getElementById("uError")     as HTMLElement;
const PassError     = document.getElementById("pError")     as HTMLElement;
const SelectError   = document.getElementById("sError")     as HTMLElement;
const SwapPassword  = document.getElementById("btnp")       as HTMLButtonElement;

function checkName() {
    let Username = UsernameInput.value.trim();
    return (Username || (Username.length >=6 && Username.length <= 16))
}
function checkPassword() {
    let Password = passwordInput.value;
    return isStrong(Password);
}
function isStrong (P:string) {
    let reg = RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[1,9])(?=.{6,})")
    return reg.test(P);
}
function allowComp206() {
    let Select = SelectInput.value;
    return !((Select == "First" || Select == "Seconed" )&& IsComp206.checked);
}
function isSelected () {
    return SelectInput.value!="Select your Semester..";
}
function coursesThatSelected () {
    let Courses : string [] = [];
    if (IsComp102.checked)Courses.push("Comp102")
    if (IsComp206.checked)Courses.push("Comp206")
    if (IsMath102.checked)Courses.push("math102")
    return Courses.length > 0 ? Courses.join(" , ") : "No Courses Selected";
}
SwapPassword.addEventListener('click' , function(e) {
    if (passwordInput.type == "password") {
        passwordInput.type = "text"
        SwapPassword.textContent = "hide";
    }else {
        passwordInput.type = "password"
        SwapPassword.textContent = "show";
    }
})
UsernameInput.addEventListener('focus' , function () {
    UserError.style.color = 'black'
    UserError.className = 'normal'
})  
passwordInput.addEventListener('focus' , function () {
    PassError.style.color = 'black'
    PassError.className = 'normal'
})
SelectInput.addEventListener('focus' , function() {
    SelectError.style.color = 'black'
    SelectError.className = 'normal'
})
FormRegister.addEventListener('submit' , function (e) {
    e.preventDefault();
    let valid = true;
    UserError.className = 'normal'  
    PassError.className = 'normal'
    SelectError.className = 'normal'
    if (!checkName()) {
        valid = false;
        UserError.className = 'wrong'
    }
    if (!checkPassword()) {
        valid = false;
        PassError.className = 'wrong'
    }
    if (!isSelected()) {
        valid = false;
        SelectError.className = 'wrong'
    }
    let validForComp206 = true;
    if (!allowComp206()) {
        validForComp206 = false;
    }
    if (Sign.checked) {
        alert("Hello my friend you have a new spam");
    }
    if (!validForComp206) {
        alert("please you are not allow to register for Comp206");
    }else if (valid) {
        let newtext = document.createElement("textarea");
        newtext.value = `Username is : ${UsernameInput.value}
Password is : ${passwordInput.value}
Semester is : ${SelectInput.value}
Courses are : ${coursesThatSelected()}
Newsletter : ${Sign.checked ? "Yes" : "NO"}
`
        newtext.rows = 20;newtext.cols = 20;
        FormRegister.appendChild(newtext);
        let newWindow = window.open ("","Register" , "width = 1000 , height = 1000")
        if (newWindow) {
            newWindow.document.body.innerHTML = "<h1 id='h1'> Thanks For Register for the Form </h1>"
            let Text = newWindow.document.getElementById("h1") as HTMLElement;
            Text.style.color = 'blue';
            Text.style.fontSize = '50px'
            setInterval (function() {
                if (Text.style.color == 'blue') {
                    Text.style.color = 'red'
                }else if (Text.style.color == 'red'){
                    Text.style.color = 'yellow'
                }else {
                    Text.style.color = 'blue'
                }
                if (Text.style.fontSize == '50px') {
                    Text.style.fontSize = '40px'
                }else if (Text.style.fontSize == '40px') {
                    Text.style.fontSize = '30px'
                }else {
                    Text.style.fontSize = '50px'
                }
            } , 250)
        }
    }else {
        UserError.style.color = 'red'
        PassError.style.color = 'red'
        SelectError.style.color = 'red'
    }
})