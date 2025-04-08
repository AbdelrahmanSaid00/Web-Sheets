"use strict";
const btn = document.getElementById("btn");
const Show = document.getElementById("textarearesult");
const stud = [];
btn.addEventListener('click', () => {
    const nameget = document.getElementById("name");
    const ageget = document.getElementById("age");
    const gpaget = document.getElementById("gpa");
    const sortres = document.getElementById("sort");
    Show.value = "";
    let na = nameget.value;
    let ag = parseInt(ageget.value);
    let gp = parseFloat(gpaget.value);
    if (!nameget.value || isNaN(ag) || isNaN(gp)) {
        window.alert("Please Enter Valid Inputs");
        return;
    }
    stud.push({ name: na, age: ag, gpa: gp });
    if (sortres.value === "Name") {
        stud.sort((a, b) => { return a.name < b.name ? -1 : 1; });
    }
    else if (sortres.value === "GPA") {
        stud.sort((a, b) => b.gpa - a.gpa);
    }
    let result = "";
    stud.forEach(e => { Show.value += `The name is: ${e.name}, The Age is: ${e.age}, and the GPA is: ${e.gpa}\n******************************\n`; });
    if (stud.filter(e => e.gpa < 2).length > 3)
        window.alert("Warning: More than 3 students have a GPA below 2!");
});
//# sourceMappingURL=Q3.js.map