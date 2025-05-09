"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const app = (0, express_1.default)();
const port = 2001;
app.use(express_1.default.json());
app.use(route_1.default);
app.listen(port, () => {
    console.log(`The Server is start in http://localhost:${port}`);
});
