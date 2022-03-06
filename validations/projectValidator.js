const Joi = require('joi');

module.exports.updateProjectValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    release_date: Joi.string(),
    tags: Joi.array(),
    demo_url: Joi.string(),
    preview_image_src: Joi.string(),
    secret: Joi.string(),
  });
  return schema.validate(data);
};
