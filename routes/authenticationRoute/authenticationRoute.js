const { login } = require('../../controllers/auth/login');
const { logout } = require('../../controllers/auth/logout');
const { register } = require('../../controllers/auth/register');

const authenticationRoute = require('express').Router();

authenticationRoute.post('/sign-up', register);
authenticationRoute.post('/sign-in', login);
authenticationRoute.get('/sign-out', logout);

module.exports = authenticationRoute;
