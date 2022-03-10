const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();
const { errors } = require('celebrate');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const { validateRegisterBody } = require('./validation');
const { login, createUser } = require('./controllers/users');
const errorsHandler = require('./middlewares/error-handler');
const { NotFoundError } = require('./errors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors);

app.use(cors({
  origin: 'https://photosave.nomoredomains.xyz',
  credentials: true,
}));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  // useUnifiedTopology: true
  // useCreateIndex: true,
  // useFindAndModify: false
});

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 1000);
});

app.post('/signin', validateRegisterBody, login);
app.post('/signup', validateRegisterBody, createUser);
app.use(auth);

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use(errorLogger);

app.use((req, res, next) => {
  next(new NotFoundError('Маршрут не существует.'));
});

app.use(errors());
app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// npx eslint . --fix
