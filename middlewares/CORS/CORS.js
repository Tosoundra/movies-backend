const whiteList = [
  'http://localhost:5173',
  'http://localhost:4173',
  'http://84.201.172.65',
  'http://tosoundra.nomoredomainsmonster.ru',
  'https://tosoundra.github.io/portfolio/',
];

module.exports.cors = async (request, response, next) => {
  try {
    const { origin } = request.headers;
    if (whiteList.includes(origin)) {
      response.header('Access-Control-Allow-Origin', origin);
    }

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
