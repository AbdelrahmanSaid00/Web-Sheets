"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const express_validator_1 = require("express-validator");
const Validation = () => {
    return [
        (0, express_validator_1.check)("username").notEmpty().withMessage("Name is required"),
        (0, express_validator_1.check)("email").isEmail().withMessage("Email is invalid"),
        (0, express_validator_1.check)("password").notEmpty().withMessage("Password is required"),
    ];
};
exports.Validation = Validation;
