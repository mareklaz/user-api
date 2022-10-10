const router = require('express').Router();
const userController = require('../controller/user.controller');

router.get('/', (req, res, next) => {
  res.json({ ok: true });
})

router.get('/users', userController.list);
router.post('/users', userController.create);
router.get('/users/:id', userController.detail);

module.exports = router;

