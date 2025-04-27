"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const details_1 = require("../data/details");
const checker_1 = __importDefault(require("../middleware/checker"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.status(201).send('Welcome to Car Store 🚗⛽');
});
//show cars
router.get('/cars', (req, res) => {
    if (details_1.cars.length == 0) {
        res.status(401).send('Sorry no car founded ');
        return;
    }
    res.status(200).json(details_1.cars);
});
router.get('/cars', checker_1.default, (req, res) => {
    const id = parseInt(req.params.id);
    res.status(201).json(details_1.cars[id]);
});
router.post('/cars', (req, res) => {
    const { brand, model, clas } = req.body;
    if (!brand || !model || !clas) {
        res.status(401).json("Error Please check the input");
        return;
    }
    const newCar = { id: details_1.cars.length + 1, brand: brand, model: model, clas: clas };
    details_1.cars.push(newCar);
    res.status(201).json(newCar);
});
router.delete('/cars/:id', checker_1.default, (req, res) => {
    const id = Number(req.params.id);
    details_1.cars.splice(id, 1);
    res.status(201).send('car deleted Successfully !');
});
// show cus
router.post('/users', (req, res) => {
    const { name, age } = req.body;
    if (!name || name !== 'string' || !age || age !== 'number') {
        res.status(400).json({ message: 'Invalid user data' });
        return;
    }
    const newUser = { id: details_1.users.length + 1, name, age };
    details_1.users.push(newUser);
    res.status(201).json(newUser);
});
router.get('/users/:id', checker_1.default, (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).json(details_1.users[id]);
});
router.delete('/users/:id', checker_1.default, (req, res) => {
    const id = Number(req.params.id);
    details_1.users.splice(id, 1);
    res.status(200).json("Cus deleted successfully...");
});
// show intr
router.post('/intrests', (req, res) => {
    const { user, car } = req.body;
    if (!user || !car) {
        res.status(400).json('Invalid intrest data');
        return;
    }
    const newIntrest = { "user": user, "car": car };
    details_1.interests.push(newIntrest);
    res.status(201).json(newIntrest);
});
router.get('/intrests/:id', checker_1.default, (req, res) => {
    const id = Number(req.params.id);
    res.status(200).json(details_1.interests[id]);
});
exports.default = router;
