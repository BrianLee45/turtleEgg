const User = require('mongoose').model('User');

class UsersController {
  index(request, response) {
    User.find({})
      .then(users => {
        response.json(users);
      })
      .catch(error => {
        response.status(422).json(error.message);
      });
  }

  create(request, response) {
    console.log(`users.create: ${request.body}`);
    User.create(request.body)
      .then(user => {
        response.json(user);
      })
      .catch(error => {
        console.log(`Server error: ${ error }`);
        response.status(422).json(error.message);
      })
  }
}

module.exports = new UsersController();
