module.exports.routeNotFound = (request, response) => {
  response.status(404).send({ error: 'Некорректный адрес запроса' });
};
