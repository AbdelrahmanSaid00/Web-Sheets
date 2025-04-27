//Q3
interface Userr {
    username:string,
}
const x : Userr = {
    username: "Ahmed",
}
function login() {
    if (x.username === "Ahmed") {
        return true;
    }else {
        return false;
    }
}
async function fetchData () {
    let done = login();
    return await new Promise ((res,rej)=> {
        if (done) {
            res("Successfully logged in !")
        }else {
            rej("Failedto log in, please try again");
        }
    }) 
}
fetchData()
    .then((ans)=> {
        console.log(ans);
    })
    .catch(err=> {
        console.log(err);
    })
    .finally(()=> {
        console.log("Thanks for your time")
    })