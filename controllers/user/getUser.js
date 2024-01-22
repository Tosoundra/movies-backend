const { UserModel } = require('../../models/user/user');

module.exports.getUser = async (request, response) => {
  try {
    const { id } = request;

    const user = await UserModel.findById(id)
      .select('-__v')
      .select('-favoriteMovies');

    response.send(user);
  } catch (error) {
    console.log(error);
    response.send({ error });
  }
};
