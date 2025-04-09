//Question--3
const ischeckedhtml = document.getElementById("html") as HTMLInputElement
const ischeckedphp = document.getElementById("php")as HTMLInputElement
const ischeckedjs = document.getElementById("js")as HTMLInputElement
const ischeckedcss = document.getElementById("css")as HTMLInputElement
const showtheresult = document.getElementById("listdown") as HTMLSelectElement;
const listoffile : string [] = ['index.html','index.css','index.php','index.js','txt.html','txt.css','txt.js','txt.php',]
listoffile.forEach((item)=> {let ele = document.createElement("option");
    ele.value = item;
    ele.textContent = item;
    showtheresult.appendChild(ele)
})
const checktheElement = ()=> {
    showtheresult.innerHTML = "<option value ='' >The file type </option>";
    let answer : string [] =[];
    if (ischeckedcss.checked){answer.push('css')}
    if (ischeckedhtml.checked){answer.push('html')}
    if (ischeckedphp.checked){answer.push('php')}
    if (ischeckedjs.checked){answer.push('js')}
    const newlist = listoffile.filter ((item)=> !answer.includes(item.split('.')[1]))
    newlist.forEach((item) => {let ele = document.createElement("option");
        ele.value = item;
        ele.textContent = item;
        showtheresult.appendChild(ele)
    })
}
ischeckedhtml.addEventListener('change' , checktheElement)
ischeckedcss.addEventListener('change' , checktheElement)
ischeckedphp.addEventListener('change' , checktheElement)
ischeckedjs.addEventListener('change' , checktheElement)