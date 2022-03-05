const Joi = require('joi');

module.exports.updateProfileValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    profession: Joi.string().required(),
    secret: Joi.string(),
  });
  return schema.validate(data);
};
