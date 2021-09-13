const express = require('express');
const logger = require('morgan');
const http = require('http');

const noteRoute = require('./routes/note.route');
const userRoute = require('./routes/user.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

const server = http.createServer(app);
const db = require('./databases/mysql/config');

db.initTables();

server.listen(process.env.PORT || 3000, () => {
  console.log('Node API is running on port 3000');
});
