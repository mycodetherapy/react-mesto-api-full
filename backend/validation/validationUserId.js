const { celebrate, Joi } = require('celebrate');
const { ObjectId } = require('mongoose').Types;

const validationUserId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (ObjectId.isValid(value)) {
          return value;
        }
        return helpers.message('Невалидный id');
      }),
  }),
});

module.exports = validationUserId;
