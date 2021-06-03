var express = require('express'),
  app = express(),
  port = process.env.PORT || 1234;
var cors = require('cors')

var mongoose = require('mongoose');

app.use(cors());
mongoose.connect('mongodb://mongo:27017/database', { useNewUrlParser: true, useUnifiedTopology: true })

var routes = require("./Routes/routes")

app.listen(port);

console.log('API server started on: ' + port);
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use('/api', routes);