const { UserModel } = require('../../models/user/user');

module.exports.getFavoriteMovies = async (request, response) => {
  try {
    const id = request.id;

    const user = await UserModel.findById(id).select('-__v');

    response.send(user.favoriteMovies);
  } catch (error) {
    console.log(error);
  }
};
