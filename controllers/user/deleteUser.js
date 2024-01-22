const { UserModel } = require('../../models/user/user');

module.exports.deleteUser = async (request, response) => {
  try {
    const { id } = request.id;
    const result = await UserModel.findByIdAndDelete(id);

    if (!result) {
      throw new Error('internal server error');
    }

    response.send('you have successfully deleted account');
  } catch (error) {
    console.log(error);
    response.send(error);
  }
};
