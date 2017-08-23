const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(path.join(__dirname, 'dist')));

require('./server/config/database');

app.listen(port, () => console.log(`listening on port ${ port }`));
