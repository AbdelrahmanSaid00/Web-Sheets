interface Car {
    id:number,
    brand: string,
    model: string,
    clas: 'A' | 'B' | 'C'
}
interface User {
    id:number,
    name:string,
    age:number
}
interface Interests {
    user: User,
    car: Car
}
const cars:Car[] = [];
const users:User[] = [];
const interests:Interests[] = [];

export {cars, users, interests}