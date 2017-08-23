const Player = require('mongoose').model('Player');

class PlayersController {

  index(request, response) {
    Player.find({})
      .then(players => response.json(players))
      .catch(error => response.status(422).json(error.message));
  }

  create(request, response) {
    Player.create(request.body)
      .then(player => response.json(player))
      .catch(error => {
        console.log(`errors creating player ${error}`);
        response.status(422).json(
          Object.keys(error.errors).map(key => error.errors[key].message)
        );
      })
  }

  show(request, response) {}
  update(request, response) {}
  destroy(request, response) {}

}

module.exports = new PlayersController();
