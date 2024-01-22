const { deleteUser } = require('../../controllers/user/deleteUser');
const { getUser } = require('../../controllers/user/getUser');
const { updateUser } = require('../../controllers/user/updateUser');

const userRoute = require('express').Router();

userRoute.get('/', getUser);
userRoute.delete('/', deleteUser);
userRoute.patch('/', updateUser);

module.exports = userRoute;
