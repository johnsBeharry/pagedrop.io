import path from 'path';
import express from 'express';
import routes from './routes';

const app = express();

// middleware
app.use(express.static(path.join(__dirname, '../static')));

// route middleware
app.use('/page', routes);

export default app;
