import { Request , Response , NextFunction } from 'express';
export const validBook = (req :Request,res : Response,next :NextFunction)=> {
    const {title , author} = req.body;
    if (!title || !author) {
        res.status(400).send('Please Check the Error ...!');
        return;
    }
    next();
}