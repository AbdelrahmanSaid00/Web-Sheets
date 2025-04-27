import express from 'express';
import {Book , theBooks} from '../data/books'
import { validBook } from '../middleware/validBook';

const router = express.Router()
router.get('/', (req, res) => {
    res.send('<h1>Welcome to the Book Management API 😍📙 </h1>');
});
router.get('/' , (req , res)=> {
    res.status(201).send('Welcome to the Book Management API 😍📙')
})
//GET (“/books”) sd
router.get('/books' , (req,res)=> {
    res.json(theBooks);
})
//GET (“/books/:id”) fd
router.get('/books/:id' , (req,res)=> {
    const { id } = req.params
    const findBook = theBooks.find((x)=> x.id === Number(id))
    if (findBook === undefined) {
        res.status(400).send("Book is not founded");
        return
    }else {
        res.status(201).json(findBook)
    }
})
//POST (“/books”) aac
router.post('/books', validBook , (req,res)=> {
    const {title , author} = req.body
    const newbook: Book = {
        id: theBooks.length + 1,
        title,
        author,
    };
    theBooks.push(newbook);
    res.status(201).send(`The ID of book : ${newbook.id} , the title is : ${newbook.title} and was added by ${newbook.author}`);
})
//PUT (“/books/:id”)
router.put('/books/:id',validBook,(req,res)=> {
    const id = Number(req.params.id);
    const {title , author} = req.body
    const findBook = theBooks.findIndex((x)=> x.id === id)
    if (findBook == -1) {
        res.status(400).send("Book is not founded ...! (Error ID)");
        return
    }else {
        theBooks[findBook].title = title
        theBooks[findBook].author = author
        res.status(201).json({"Message": "Book Updated Successfully"})
    }
})
export default router;