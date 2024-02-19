const bCrypt = require('bcrypt');

const { UserModel } = require('../../models/user/user');

module.exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const user = await UserModel.getUserByEmail(email);

    if (user) {
      throw new Error('Пользователь с указанным email уже существует');
    }

    const hashedPassword = await bCrypt.hash(password, 10);
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.send({
      message:
        'Вы успешно зарегистрировались! Вы будете автоматически перенаправлены на страницу входа',
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};
