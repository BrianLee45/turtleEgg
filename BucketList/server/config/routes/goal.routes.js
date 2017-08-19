const goalController = require('../../controllers/goals');
const router = require('express').Router();

module.exports = router
  .get('/', goalController.index)
  .post('/', goalController.create);
