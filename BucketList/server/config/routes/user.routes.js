const userController = require('../../controllers/users');
const router = require('express').Router();

module.exports = router
  .get('/', userController.index)
  .post('/', userController.create);
