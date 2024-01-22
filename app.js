const bodyParser = require('body-parser');
const { default: helmet } = require('helmet');

const cookieParser = require('cookie-parser');
const {
  authentication,
} = require('./middlewares/authentication/authentication');
const userRoute = require('./routes/userRoute/userRoute');
const { routeNotFound } = require('./middlewares/routeNotFound/routeNotFound');
const favoriteMoviesRoute = require('./routes/favoriteMoviesRoute/favoriteMoviesRoute');
const { cors } = require('./middlewares/cors/cors');
const authenticationRoute = require('./routes/authenticationRoute/authenticationRoute');

require('dotenv').config();
const app = require('express')();

// app.use(helmet());

app.use(cors);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', authenticationRoute);

app.use(authentication);
app.use('/favorites', favoriteMoviesRoute);
app.use('/user', userRoute);

app.use(routeNotFound);

module.exports = app;
