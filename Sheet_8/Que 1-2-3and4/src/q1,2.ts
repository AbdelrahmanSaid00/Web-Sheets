//Q1 and Q2
interface User {
    username:string,
    age:number
}
const a : User= {
    username:"Abdalrahman",
    age:35,
};
let ok = false;
console.log("Program Starting");
async function fetchDatau () {
    return await new Promise ((res,rej)=> {
        if (ok) {
            setTimeout (()=> {
                res({ User : {username : a.username , age : a.age}})
            },2000)
        }else {
            setTimeout (()=> {
                rej("Rejected");
            },2000)
        }
    })
}
fetchDatau().then(res => {
    console.log(res)
}).catch (err=> {
    console.log(err);
}).finally(()=> {
    console.log("Program Completed!")
})