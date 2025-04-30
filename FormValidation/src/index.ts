import express from 'express';
import path from 'path';
import  route  from './routes/register';

const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))

app.use('/', route);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});