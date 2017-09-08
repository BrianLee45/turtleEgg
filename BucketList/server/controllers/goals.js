const Goal = require('mongoose').model('Goal');

class GoalsController {

  index(request, response) {
    console.log('Getting goals...');

    Goal.find({})
      .populate('users')
      .populate('createdBy')
      .then(goals => {response.json(goals)})
      .catch(error => {response.status(422).json(error.message)});
  }

  create(request, response) {
    const goal = new Goal(request.body);

    goal.save()
      .then(function(goal) {
        response.json(goal);
      })
      .catch(function(error) {
        console.log(error);
      })
  }
  update(request, response) {}
  destroy(request, response) {}
}

module.exports = new GoalsController();
