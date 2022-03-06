const router = require('express').Router();
const auth = require('../middleware/auth');

const { getProjectsController, updateProjectController, addProjectController } = require('../controllers/projectController');

router.get('/', getProjectsController);
router.post('/', auth, addProjectController);
router.put('/:id', auth, updateProjectController);

module.exports = router;
