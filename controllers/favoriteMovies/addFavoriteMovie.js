const { UserModel } = require('../../models/user/user');

module.exports.addFavoriteMovie = async (request, response) => {
  try {
    const { id } = request;
    const { movieId } = request.params;

    const user = await UserModel.findById(id);
    const { favoriteMovies } = user;

    if (!favoriteMovies.includes(Number(movieId))) {
      favoriteMovies.push(Number(movieId));
      await user.save();
      response.send(favoriteMovies);
    }
  } catch (error) {
    console.log(error);
  }
};
