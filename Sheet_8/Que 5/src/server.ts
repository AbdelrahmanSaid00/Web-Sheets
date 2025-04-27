import express from "express";
import path from "path";
import { User } from "./module/moduser";
import cors from 'cors';

const app = express();
app.use(cors());
const Port = 2005;
const Person : User[] = [
    {
        firstName: "Abdalrahman",
        lastName: "Said",
        age: 19
    },
    {
        firstName: "Ahmed",
        lastName: "Ashref",
        age: 19
    },
    {
        firstName: "Maro",
        lastName: "Weal",
        age: 19
    },
    {
        firstName: "Yousef",
        lastName: "Mahmoud",
        age: 19
    }
];
app.get('/' , (req , res)=> {
    res.sendFile(path.join(__dirname , "../public/main.html"))
})
app.get('/user' , (req,res)=> {
    if (Person.length === 0) {
        res.status(400).send("No Users founded !...");
        return
    }
    res.status(201).json(Person)
})
app.listen(Port,()=>{
    console.log(`Server is start in the http://localhost:${Port}`);
})