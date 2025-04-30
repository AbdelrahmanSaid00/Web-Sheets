import express , { Router , Request, Response } from "express";
import { Validation } from "../validation/validation";
import { Result, validationResult } from "express-validator";
const route = Router()
route.get('/register' , (req,res)=> {
    res.render('index')
})
route.post('/register' , Validation() , (req : Express.Request , res : any)=> {
    console.log(req)
    const reuslt = validationResult(req);
    console.log(reuslt)
    if (!reuslt.isEmpty()) {
        return res.status(401).json({error : reuslt.array()});
    }
    else {
        res.send("Validation are done")
    }
})
export default route