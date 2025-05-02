import { Router } from 'express';
import path from 'path';
const profileRouter = Router();

profileRouter.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/profile.html'));
});

profileRouter.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

export { profileRouter };