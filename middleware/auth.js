const { errorSend } = require('../utils/responseSender');

module.exports = async (req, res, next) => {
  if (req.body.secret === process.env.POST_SECRET) {
    req.user = true;
    return next();
  }
  return errorSend(res, 403, 'You are not authorized!');
};
