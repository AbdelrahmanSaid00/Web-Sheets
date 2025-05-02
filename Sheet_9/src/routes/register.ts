import { Router, Request, Response } from 'express';
import { validateuser } from '../validation/validreg';
import { validationResult } from 'express-validator';
import { writeJFile } from '../validation/writefile';
import { User } from '../data/user';
import path from 'path';

const registerRouter = Router();

registerRouter.get('/register', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../public/register.html'));
});

registerRouter.post('/register', validateuser(), async (req: any, res: any) => {
try 
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
    {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    const newUser = new User(username, email, password);
    await writeJFile('users.json',newUser);
    res.redirect('/login');
} 
catch (error) 
{
    res.status(500).json({ error: `Failed to register user: ${error}`});
}
});

export { registerRouter };