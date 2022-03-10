const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateRegisterBody = celebrate({
  body: {
    password: Joi.string().min(4).max(30).required()
      .messages({
        'string.min': 'Минимальная длина поля 4 символа.',
        'string.max': 'Максимальная длина поля 30 символов.',
        'any.required': 'Поле обязательно для заполнения.',
      }),
    email: Joi.string().required().email().message({
      'any.required': 'Поле обязательно для заполнения.',
      'string.email': 'Поле должно содержать адрес электронной почты.',
    }),
    name: Joi.string().min(2).max(30).messages({
      'string.min': 'Минимальная длина поля 2 символа.',
      'string.max': 'Максимальная длина поля 30 символов.',
    }),
    about: Joi.string().min(2).max(30).messages({
      'string.min': 'Минимальная длина поля 2 символа.',
      'string.max': 'Максимальная длина поля 30 символов.',
    }),
    avatar: Joi.string().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Поле должно содержать ссылку.');
    }),
  },
});

module.exports = validateRegisterBody;
