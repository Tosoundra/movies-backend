const { UserModel } = require('../../models/user/user');

module.exports.removeFavoriteMovie = async (request, response) => {
  try {
    const { id } = request;
    const { movieId } = request.params;

    const user = await UserModel.findById(id);
    const { favoriteMovies } = user;

    if (favoriteMovies.includes(Number(movieId))) {
      const selectedMovieToDelete = favoriteMovies.indexOf(Number(movieId));
      favoriteMovies.splice(selectedMovieToDelete, 1);
      await user.save();
      response.send(favoriteMovies);
    }
  } catch (error) {
    console.log(error);
  }
};
