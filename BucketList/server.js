const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = process.env.PORT || 8000;
const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'SessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 36000
  }
};

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(session(sessionConfig));
app.use(cookieParser('asdfasdfaskjljasdflkjsl'));

require('./server/config/database');

app.use('/api/users', require('./server/config/routes/user.routes'));
app.use('/api/goals', require('./server/config/routes/goal.routes'));

const otherRoutes = require('./server/config/routes/other.routes');
app.use(otherRoutes);

app.listen(port, () => console.log(`Listening on port ${ port }`));
