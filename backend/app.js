const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes');
const CentralError = require('./middlewares/errors/centralError');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(CentralError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
