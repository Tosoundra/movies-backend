const {
  authentication,
} = require('../../middlewares/authentication/authentication/authentication');

const meRoute = require('express').Router();

meRoute.get('/', authentication);
