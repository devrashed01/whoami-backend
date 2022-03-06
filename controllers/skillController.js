const Skill = require('../models/skillModel');
const { successSend, errorSend } = require('../utils/responseSender');
const { updateSkillValidator } = require('../validations/skillValidator');

module.exports.getSkillsController = async (req, res) => {
  const skill = await Skill.find();

  if (!skill) {
    errorSend(res, 401, 'Skills not found');
  }

  return successSend(res, 200, skill, 'Skills retrieved successfully');
};

module.exports.addSkillController = async (req, res) => {
  const { error } = updateSkillValidator(req.body);
  if (error) {
    return errorSend(res, 400, error.details[0].message);
  }

  const skill = new Skill({
    name: req.body.name,
    description: req.body.description,
    release_date: req.body.release_date,
    creator: req.body.creator,
    progress: req.body.progress,
  });

  await skill.save();

  return successSend(res, 200, skill, 'Skill updated successfully');
};

module.exports.updateSkillController = async (req, res) => {
  const { error } = updateSkillValidator(req.body);
  if (error) {
    return errorSend(res, 400, error.details[0].message);
  }

  const skill = await Skill.findById(req.params.id);

  if (!skill) {
    return errorSend(res, 400, 'invalid id');
  }

  skill.name = req.body.name;
  skill.description = req.body.description;
  skill.release_date = req.body.release_date;
  skill.creator = req.body.creator;
  skill.progress = req.body.progress;
  await skill.save();

  return successSend(res, 200, skill, 'Skill updated successfully');
};
