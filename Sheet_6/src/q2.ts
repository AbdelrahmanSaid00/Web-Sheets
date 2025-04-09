//Question--2
const para = document.getElementById("para") as HTMLParagraphElement;
const emm = document.querySelectorAll("em");
para.addEventListener('mouseover' , ()=> {
    emm.forEach((em)=> {
        em.style.cssText = 'color: plum; border: 1px dashed magenta; font-weight: bold;';
    })
})
para.addEventListener('mouseout' , ()=> {
    emm.forEach((em)=> {
        em.style.cssText="";
    })
})