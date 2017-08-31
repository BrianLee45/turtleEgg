const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    console.log(`controller.login: ${request.body.email}`);
    User.findOne({ email: request.body.email })
      .then(user => {
        if (!user) throw new Error();

        console.log('there', user);

        // return User.checkPassword(request.body.password, user.password)
        if (User.checkPassword(request.body.password, user.password)) {
            console.log(`checkPassword: true`);
            doLogin(request, response, user);
        } else {
          throw new Error();
        }
          // .then(() => {
          // .then(gimme => {
          //   console.log(`inside then: ${ gimme }`);
          //   doLogin(request, response, user);
          // });
      })
      .catch(error => {
        response.status(401).json(`Login failed ${ error }`);
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
  console.log(`doLogin: ${ user }`);
  request.session.user = user.toObject();

  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 80000 * 1000);
  response.json(user);

}
