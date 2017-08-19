const loginController = require('../../controllers/login');
const router = require('express').Router();

module.exports = router
  .post('/login', loginController.login)
  .delete('/logout', loginController.logout);
