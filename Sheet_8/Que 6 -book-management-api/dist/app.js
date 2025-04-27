"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./middleware/logger");
const bookRoute_1 = __importDefault(require("./routes/bookRoute"));
const app = (0, express_1.default)();
const Port = 2015;
app.use(express_1.default.json());
app.use(logger_1.logger);
app.use('/', bookRoute_1.default);
app.listen(Port, () => {
    console.log(`The Server is running on http://localhost:${Port}`);
});
