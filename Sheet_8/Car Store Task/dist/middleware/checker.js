"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const details_1 = require("../data/details");
function check(req, res, next) {
    const id = Number(req.params.id);
    if (id < 0 || id > details_1.cars.length) {
        res.status(400).json("Error ...!");
        return;
    }
    next();
}
exports.default = check;
