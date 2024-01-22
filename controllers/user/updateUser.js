const { UserModel } = require('../../models/user/user');
const bCrypt = require('bcrypt');

module.exports.updateUser = async (request, response) => {
  try {
    const { email, newPassword, oldPassword } = request.body;
    const { id } = request;

    if (!newPassword) {
      await UserModel.findByIdAndUpdate(
        id,
        { email },
        { returnDocument: 'after' }
      )
        .select('-__v')
        .select('-favoriteMovies');

      response.send({ message: 'Данные успешно обновлены!' });
      return;
    }

    await UserModel.checkPassword(id, oldPassword);
    const hashedPassword = await bCrypt.hash(newPassword, 10);
    await UserModel.findByIdAndUpdate(
      id,
      { email, password: hashedPassword },
      { returnDocument: 'after' }
    )
      .select('-__v')
      .select('-favoriteMovies');

    response.send({ message: 'Данные успешно обновлены!' });
  } catch (error) {
    response.send({ error });
    console.log(error);
  }
};
