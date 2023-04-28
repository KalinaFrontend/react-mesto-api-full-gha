const validator = require('validator');

const JWT_SECRET = 'JWT_SECRET';

const imageLink = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const emailLink = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const allowedCors = [
  'https://mesto-react-kalina.nomoredomains.monsteru',
  'https://api.mesto-react-kalina.nomoredomains.monster',
  'http://mesto-react-kalina.nomoredomains.monsteru',
  'http://api.mesto-react-kalina.nomoredomains.monster',
  'https://localhost:3000',
  'http://localhost:3000',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

const isUrl = (link) => {
  const result = validator.isURL(link);
  if (result) {
    return link;
  }
  throw new Error('Невалидный URL');
};

module.exports = {
  JWT_SECRET, imageLink, emailLink, allowedCors, DEFAULT_ALLOWED_METHODS, isUrl,
};
