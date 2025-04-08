//Question--3
const btn = document.getElementById("btn") as HTMLButtonElement;
const Show = document.getElementById("textarearesult") as HTMLTextAreaElement;
interface Student {
    name:string,
    age:number,
    gpa:number,
}
const stud : Student[] = [];
btn.addEventListener ('click' , ()=> {
    const nameget = document.getElementById("name") as HTMLInputElement;
    const ageget = document.getElementById("age") as HTMLInputElement;
    const gpaget = document.getElementById("gpa") as HTMLInputElement;
    const sortres = document.getElementById("sort") as HTMLSelectElement;
    Show.value="";
    let na = nameget.value ;let ag = parseInt(ageget.value) ;let gp = parseFloat(gpaget.value);
    if (!nameget.value || isNaN(ag) || isNaN(gp)){ window.alert("Please Enter Valid Inputs"); return;}
    stud.push({name:na , age:ag , gpa:gp});
    if (sortres.value === "Name") {stud.sort((a,b)=>{return a.name < b.name ? -1 : 1 })}
    else if (sortres.value === "GPA") {stud.sort((a,b) => b.gpa - a.gpa)}
    let result = "";
    stud.forEach(e=> {Show.value += `The name is: ${e.name}, The Age is: ${e.age}, and the GPA is: ${e.gpa}\n******************************\n`;})
if (stud.filter(e => e.gpa < 2).length > 3) window.alert("Warning: More than 3 students have a GPA below 2!")
})
