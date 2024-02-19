const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;

module.exports.authentication = async (request, response, next) => {
  try {
    const { token } = request.cookies;

    const { id } = jwt.verify(token, JWT_SECRET_KEY);

    if (!id) return Promise.reject('you must logged in');

    request.id = id;

    next();
  } catch (error) {
    console.log(error);
    if (error instanceof jwt.JsonWebTokenError) {
      response.status(401).end();
      return;
    }

    response.status(500).send({ message: error.message });
  }
};
