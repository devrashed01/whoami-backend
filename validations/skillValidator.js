const Joi = require('joi');

module.exports.updateSkillValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    release_date: Joi.string(),
    creator: Joi.string(),
    progress: Joi.string(),
    secret: Joi.string(),
  });
  return schema.validate(data);
};
