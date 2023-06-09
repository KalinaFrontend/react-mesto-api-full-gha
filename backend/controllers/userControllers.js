const { hash } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userScheam');
const { NODE_ENV, JWT_SECRET } = require('../utils/constants');

const {
  ConflictError,
  InaccurateDataError,
  NotFoundError,
  UnauthorizedError,
} = require('../middlewares/errors/index');

const createUser = (req, res, next) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;

  hash(password, 10)
    .then((hashedPassword) => User.create({
      name,
      about,
      avatar,
      email,
      password: hashedPassword,
    }))
    .then((newUser) => {
      // eslint-disable-next-line no-undef
      const user = newUser.toObject();
      delete user.password;
      res.status(201).send({ user });
    })
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError(
          'Пользователь с таким электронным адресом уже зарегистрирован',
        ));
      } else if (err.name === 'ValidationError') {
        next(new InaccurateDataError('Переданы некорректные данные при создании пользователя'));
      } else {
        next(err);
      }
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then(({ _id: userId }) => {
      if (userId) {
        const token = jwt.sign(
          { userId },
          NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
          { expiresIn: '7d' },
        );

        return res.send({ token });
      }

      throw new UnauthorizedError('Неправильные почта или пароль');
    })
    .catch(next);
};

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.send({ data: users });
    })
    .catch((err) => next(err));
};

const getUser = (req, res, next) => {
  const { userId } = req.user;
  User
    .findById(userId)
    .then((user) => {
      if (user) return res.send({ user });

      throw new NotFoundError('Запрашиваемый пользователь не найден');
    })
    .catch((err) => next(err));
};

const getUserId = (req, res, next) => {
  const { id } = req.params;

  User
    .findById(id)
    .then((user) => {
      if (user) {
        return res.send({ user });
      }
      throw new NotFoundError('Запрашиваемый пользователь не найден');
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new InaccurateDataError('Передан некорректный id'));
      } else {
        next(err);
      }
    });
};

const patchProfile = (req, res, next) => {
  const { name, about } = req.body;
  const { userId } = req.user;

  User
    .findByIdAndUpdate(
      userId,
      {
        name,
        about,
      },
      {
        new: true,
        runValidators: true,
      },
    )
    .then((user) => {
      if (user) return res.send({ user });
      throw new NotFoundError('Запрашиваемый пользователь не найден');
    })
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        next(new InaccurateDataError('Ошибка обработки данных'));
      } else {
        next(err);
      }
    });
};

const patchAvatar = (req, res, next) => {
  const { avatar } = req.body;
  const { userId } = req.user;
  User.findByIdAndUpdate(userId, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (user) return res.send({ user });
      throw new NotFoundError('Запрашиваемый пользователь не найден');
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new InaccurateDataError('Ошибка обработки данных'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  createUser,
  login,
  getUsers,
  getUser,
  getUserId,
  patchProfile,
  patchAvatar,
};
