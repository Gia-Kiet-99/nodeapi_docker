import express, { json, urlencoded } from 'express';
import logger from 'morgan';
import { createServer } from 'http';
import 'express-async-errors';

import noteRoute from './routes/note.route.js';
import userRoute from './routes/user.route.js';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json('Welcome to Note API');
});
app.get('/about', (req, res) => {
  res.json('About us');
});
app.use('/notes', noteRoute);
app.use('/users', userRoute);

app.use((req, res) => {
  res.status(404).send('Endpoint not found');
});
app.use((err, req, res) => {
  res.status(500).json({
    error_message: err,
  });
});

const server = createServer(app);
import { initTables } from './databases/mysql/config.js';

initTables();

server.listen(process.env.PORT || 3000, () => {
  console.log('Node API is running on port 3000');
});
