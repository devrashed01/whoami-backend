const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  const { password } = req.body;
  if (!password) return res.status(401).json({ message: 'Invalid credentials' });

  if (password === process.env.PASSWORD) {
    const token = jwt.sign({
      role: 'admin',
    }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.status(200).json({ token, message: 'Logged in successfully' });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
