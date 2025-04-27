import express from 'express'
import { logger } from './middleware/logger';
import bookRoutes from './routes/bookRoute';

const app = express();
const Port = 2015;

app.use(express.json())
app.use(logger);

app.use('/' ,bookRoutes)

app.listen(Port , ()=> {
    console.log(`The Server is running on http://localhost:${Port}`);
})