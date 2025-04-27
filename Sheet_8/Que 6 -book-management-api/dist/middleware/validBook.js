"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validBook = void 0;
const validBook = (req, res, next) => {
    const { title, author } = req.body;
    if (!title || !author) {
        res.status(400).send('Please Check the Error ...!');
        return;
    }
    next();
};
exports.validBook = validBook;
