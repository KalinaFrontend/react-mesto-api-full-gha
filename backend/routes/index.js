const router = require('express').Router();
const routerUsers = require('./users');
const routerCards = require('./cards');
const routeSignup = require('./signup');
const routeSignin = require('./signin');
const auth = require('../middlewares/auth');
const NotFoundError = require('../middlewares/errors/notFoundError');

router.use('/', routeSignup);
router.use('/', routeSignin);
router.use(auth);
router.use('/users', routerUsers);
router.use('/cards', routerCards);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Объект не найден'));
});

module.exports = router;
