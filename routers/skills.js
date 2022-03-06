const router = require('express').Router();
const auth = require('../middleware/auth');

const { getSkillsController, updateSkillController, addSkillController } = require('../controllers/skillController');

router.get('/', getSkillsController);
router.post('/', auth, addSkillController);
router.put('/:id', auth, updateSkillController);

module.exports = router;
