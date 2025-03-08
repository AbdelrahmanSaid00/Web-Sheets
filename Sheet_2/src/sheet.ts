//--Question 1
function addition(num:number , num2:number , num3?:number ) {
    return num + num2 + (num3??0);
}
function subtraction(n1:number , n2:number , n3?:number ) {
    return n1 - n2 - (n3??0);
}
function multiplication(n1:number , n2:number , n3?:number ) {
    return n1 * n2 * (n3??1);
}
function division(n1:number , n2:number , n3?:number ) {
    if(n2 ===0 || (n3??1) && n3===0)
    {
        return "It is undefined";
    }
    return n1 / n2 / (n3??1);
}
function remainder(n1:number , n2:number) {
    return n1%n2;
}
console.log(addition(12,32));
console.log(subtraction(12,32));
console.log(multiplication(12,32));
console.log(division(12,32));
console.log(remainder(12,32));

//--Question 2
/*function convertFromCel(degree : number , toUnit : "K" | "F" | "Both") {
    let Fahre : number = (degree * 9/5) + 32;
    let Kelvin : number = (degree + 273.15);
    if(toUnit === "F") {
        return `${degree}°C = ${Fahre.toFixed(3)}°F`;
    }
    else if(toUnit === "K") {
        return `${degree}°C = ${Kelvin.toFixed(3)}°F`;
    }else if(toUnit === "Both"){
        return `${degree}°C = ${Fahre.toFixed(3)}°F and ${degree}°C = ${Kelvin.toFixed(3)}°F`
    }
}
console.log(convertFromCel(23 , "Both"));
console.log(convertFromCel(10 , "F"));
console.log(convertFromCel(3 , "K"));
*/
//--Question 3
/*const Factor = (num:number)=>{
    let array : number[] = [];
    for(let i = 1 ; i < num ;i++) {
        if(num % i===0) {
            array.push(i);
        }
    }
    return `Factors of ${num} : ${array.join(" - ")} and the total number of the Factors is ${array.length}`;
};
console.log(Factor(12));
console.log(Factor(19));
*/
//--Question 4
/*type person = {
    id : number;
    name : string;
    email : string ;
    isSubscribed : boolean;
};

function countOfUsers (...user : person[]) {
    let counter =0;
    for(let i =0 ; i < user.length ;i++) {
        if(user[i].isSubscribed===true) {
            counter++;
        }
    }
    return counter;
}

const user1 : person = {id : 1000 , name : "Mohamed" , email : "Mohamed@gmail.com" , isSubscribed : true};
const user2 : person = {id : 1100 , name : "Abdelrahman" , email : "Abdelrahman@gmail.com" , isSubscribed : true};
const user3 : person = {id : 1200 , name : "Ahmed" , email : "Ahmed@gmail.com" , isSubscribed : true};
const user4 : person = {id : 1300 , name : "AboBaker" , email : "AboBaker@gmail.com" , isSubscribed : false};

console.log(countOfUsers(user1 , user2 , user3 , user4));
*/
