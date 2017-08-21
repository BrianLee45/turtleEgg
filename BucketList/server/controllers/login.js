const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    console.log(`controller.login: `);
    User.findOne({ email: request.body.email })
      .then(user => {
        console.log('here');
        if (!user) throw new Error();

        return User.checkPassword(request.body.password, user.password)
          .then(() => {
            doLogin(request, response, user);
          });
      })
      .catch(error => {
        response.status(401).json('Login failed');
      })
  },

  logout(request, response) {
    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  }

};

function doLogin(request, response, user) {
  request.session.user = user.toObject();

  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 80000 * 1000);
  response.json(user);

}
