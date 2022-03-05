const User = require('../models/userModel');
const { successSend, errorSend } = require('../utils/responseSender');
const { updateProfileValidator } = require('../validations/userValidator');

module.exports.getProfileController = async (req, res) => {
  const user = await User.findOne({ id: 1 });

  if (!user) {
    errorSend(res, 401, 'User not found');
  }

  return successSend(res, 200, user, 'User retrieved successfully');
};

module.exports.updateProfileController = async (req, res) => {
  const { error } = updateProfileValidator(req.body);
  if (error) {
    return errorSend(res, 400, error.details[0].message);
  }

  let user = await User.findOne({ id: 1 });

  if (!user) {
    user = new User({
      name: req.body.name,
      email: req.body.email,
      profession: req.body.profession,
    });
    await user.save();
    return successSend(res, 200, user, 'User updated successfully');
  }

  user.name = req.body.name;
  user.email = req.body.email;
  user.profession = req.body.profession;
  await user.save();

  return successSend(res, 200, user, 'User updated successfully');
};
