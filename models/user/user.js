const { default: mongoose } = require('mongoose');
const bCrypt = require('bcrypt');
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
      trim: true,
    },
    registrationDate: {
      type: Date,
      default: new Date(),
    },
    favoriteMovies: [
      {
        type: Number,
      },
    ],
  },
  {
    statics: {
      async findUserByCredentials(email, password) {
        try {
          const user = await this.getUserByEmail(email);

          if (!user) {
            return Promise.reject('Некорректные почта или пароль');
          }

          const isMatched = await bCrypt.compare(password, user.password);
          if (!isMatched) {
            return Promise.reject('Некорректные почта или пароль');
          }

          return user;
        } catch (error) {
          throw error;
        }
      },

      async getUserByEmail(email) {
        try {
          const user = await this.findOne({ email }).select('-__v');

          return user;
        } catch (error) {
          console.log(error);
          throw error;
        }
      },

      async checkPassword(id, oldPassword) {
        try {
          const user = await this.findById(id);
          const isPasswordCorrect = await bCrypt.compare(
            oldPassword,
            user.password
          );

          if (!isPasswordCorrect) {
            return Promise.reject('Вы указали неверный старый пароль');
          }
        } catch (error) {
          throw error;
        }
      },
    },
  }
);

module.exports.UserModel = mongoose.model('user', UserSchema);
