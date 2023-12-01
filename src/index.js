const express = require('express');
const app = express();
const routes = require('./Routes')
var cors = require('cors')
app.use(cors())

require('./config/db.config');

app.use(express.json());
app.use(routes);


app.listen(3333);