const { UserModel } = require('../../models/user/user');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;

module.exports.login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = await UserModel.findUserByCredentials(email, password);
    const { _id } = user;

    const token = jwt.sign({ id: _id }, JWT_SECRET_KEY, {
      expiresIn: '7d',
    });

    response.cookie('token', token, {
      maxAge: Math.pow(1000 * 60, 2) * 24 * 7,
      httpOnly: true,
    });

    response.send({ message: 'Вы успешно авторизовались' });
  } catch (error) {
    console.log(error, 'login catch');

    response.status(404).send({ error });
  }
};
