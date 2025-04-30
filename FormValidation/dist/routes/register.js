"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_1 = require("../validation/validation");
const express_validator_1 = require("express-validator");
const route = (0, express_1.Router)();
route.get('/register', (req, res) => {
    res.render('index');
});
route.post('/register', (0, validation_1.Validation)(), (req, res) => {
    console.log(req);
    const reuslt = (0, express_validator_1.validationResult)(req);
    console.log(reuslt);
    if (!reuslt.isEmpty()) {
        return res.status(201).json({ error: reuslt.array() });
    }
    else {
        res.send("Validation are done");
    }
});
exports.default = route;
