const { celebrate, Joi } = require('celebrate');

const validationUpdateUser = celebrate({
  body: {
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'Минимальная длина поля 2 символа.',
        'string.max': 'Максимальная длина поля 30 символов.',
        'any.required': 'Поле обязательно для заполнения.',
      }),
    about: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'Минимальная длина поля 2 символа.',
        'string.max': 'Максимальная длина поля 30 символов.',
        'any.required': 'Поле обязательно для заполнения.',
      }),
  },
});

module.exports = validationUpdateUser;
