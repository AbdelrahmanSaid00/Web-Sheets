import express from 'express'
import { cars, interests, users } from '../data/details'
import checker from '../middleware/checker'
const router = express.Router()

router.get('/' ,(req,res)=> {
    res.status(201).send('Welcome to Car Store 🚗⛽');
})
//show cars
router.get('/cars' , (req,res)=> {
    if (cars.length == 0) {
        res.status(401).send('Sorry no car founded ');
        return;
    }
    res.status(200).json(cars);
})

router.get('/cars', checker, (req, res) => {
    const id = parseInt(req.params.id);
    res.status(201).json(cars[id])
});

router.post('/cars' , (req,res)=> {
    const {brand, model, clas} = req.body;
    if (!brand || !model || !clas) {
        res.status(401).json("Error Please check the input")
        return;
    }
    const newCar = { id: cars.length + 1, brand: brand, model: model, clas: clas }
    cars.push(newCar)
    res.status(201).json(newCar)
})

router.delete ('/cars/:id' , checker , (req,res)=> {
    const id = Number(req.params.id);
    cars.splice(id, 1);
    res.status(201).send('car deleted Successfully !')
})
// show cus
router.post('/users', (req, res) => {
    const { name, age } = req.body;
    if(!name || name !=='string' || !age || age !== 'number')
    {
        res.status(400).json({ message: 'Invalid user data' });
        return;
    }
    const newUser = { id: users.length + 1, name, age };
    users.push(newUser);
    res.status(201).json(newUser);
});
router.get( '/users/:id',checker, (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).json(users[id])
})
router.delete('/users/:id' ,checker, (req, res) => {
    const id = Number(req.params.id);
    users.splice(id, 1)
    res.status(200).json( "Cus deleted successfully...")
})
// show intr
router.post('/intrests',(req, res) => {
    const { user, car } = req.body;
    if(!user  || !car)
    {
        res.status(400).json('Invalid intrest data');
        return;
    }
    const newIntrest = { "user": user, "car": car };
    interests.push(newIntrest);
    res.status(201).json(newIntrest);
})
router.get('/intrests/:id', checker, (req, res) => {
    const id = Number(req.params.id);
    res.status(200).json(interests[id])
})
export default router;