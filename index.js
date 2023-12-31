'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/web', eventRoutes.routes);
app.use('/web/uploads', express.static(path.join("D:/Project Web/react/myreact/public/", 'image')));

app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port)
}); 