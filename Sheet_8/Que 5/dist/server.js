"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const Port = 2005;
const Person = [
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
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../public/main.html"));
});
app.get('/user', (req, res) => {
    if (Person.length === 0) {
        res.status(400).send("No Users founded !...");
        return;
    }
    res.status(201).json(Person);
});
app.listen(Port, () => {
    console.log(`Server is start in the http://localhost:${Port}`);
});
