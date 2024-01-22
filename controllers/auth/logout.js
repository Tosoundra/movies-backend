module.exports.logout = (request, response) => {
  try {
    response.cookie('token', '', { expires: new Date(0) });
    response.send({ message: 'Вы успешно вышли из сети' });
    response.end();
  } catch (error) {
    console.log(error);
  }
};
