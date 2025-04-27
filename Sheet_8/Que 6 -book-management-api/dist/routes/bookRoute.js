"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = require("../data/books");
const validBook_1 = require("../middleware/validBook");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('<h1>Welcome to the Book Management API 😍📙 </h1>');
});
router.get('/', (req, res) => {
    res.status(201).send('Welcome to the Book Management API 😍📙');
});
//GET (“/books”) sd
router.get('/books', (req, res) => {
    res.json(books_1.theBooks);
});
//GET (“/books/:id”) fd
router.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const findBook = books_1.theBooks.find((x) => x.id === Number(id));
    if (findBook === undefined) {
        res.status(400).send("Book is not founded");
        return;
    }
    else {
        res.status(201).json(findBook);
    }
});
//POST (“/books”) aac
router.post('/books', validBook_1.validBook, (req, res) => {
    const { title, author } = req.body;
    const newbook = {
        id: books_1.theBooks.length + 1,
        title,
        author,
    };
    books_1.theBooks.push(newbook);
    res.status(201).send(`The ID of book : ${newbook.id} , the title is : ${newbook.title} and was added by ${newbook.author}`);
});
//PUT (“/books/:id”)
router.put('/books/:id', validBook_1.validBook, (req, res) => {
    const id = Number(req.params.id);
    const { title, author } = req.body;
    const findBook = books_1.theBooks.findIndex((x) => x.id === id);
    if (findBook == -1) {
        res.status(400).send("Book is not founded ...! (Error ID)");
        return;
    }
    else {
        books_1.theBooks[findBook].title = title;
        books_1.theBooks[findBook].author = author;
        res.status(201).json({ "Message": "Book Updated Successfully" });
    }
});
exports.default = router;
