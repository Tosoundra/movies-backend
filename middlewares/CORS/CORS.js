module.exports.CORS = async (request, response, next) => {
  try {
    response.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    response.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );
    response.header('Access-Control-Allow-Credentials', 'true');
    response.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
    if (request.method === 'OPTIONS') {
      response.sendStatus(200);
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
