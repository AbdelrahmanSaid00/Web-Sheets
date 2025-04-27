import { Request , Response , NextFunction} from "express";
import { cars } from "../data/details"
function check (req : Request , res : Response , next : NextFunction) {
    const id = Number(req.params.id);
    if (id < 0 || id > cars.length) {
        res.status(400).json("Error ...!")
        return
    }
    next()
}
export default check