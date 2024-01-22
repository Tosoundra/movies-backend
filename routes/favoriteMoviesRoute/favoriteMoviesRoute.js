const {
  addFavoriteMovie,
} = require('../../controllers/favoriteMovies/addFavoriteMovie');
const {
  getFavoriteMovies,
} = require('../../controllers/favoriteMovies/getFavoriteMovies');
const {
  removeFavoriteMovie,
} = require('../../controllers/favoriteMovies/removeFavoriteMovie');

const favoriteMoviesRoute = require('express').Router();

favoriteMoviesRoute.get('/', getFavoriteMovies);
favoriteMoviesRoute.put('/:movieId', addFavoriteMovie);
favoriteMoviesRoute.delete('/:movieId', removeFavoriteMovie);
module.exports = favoriteMoviesRoute;
