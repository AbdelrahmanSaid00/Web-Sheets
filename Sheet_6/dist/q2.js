"use strict";
const para = document.getElementById("para");
const emm = document.querySelectorAll("em");
para.addEventListener('mouseover', () => {
    emm.forEach((em) => {
        em.style.cssText = 'color: plum; border: 1px dashed magenta; font-weight: bold;';
    });
});
para.addEventListener('mouseout', () => {
    emm.forEach((em) => {
        em.style.cssText = "";
    });
});
//# sourceMappingURL=q2.js.map