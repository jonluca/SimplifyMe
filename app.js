'use es6';

var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
const config = require('./config');
var app = express();
const MercuryClient = require('mercury-client');
const mc = new MercuryClient(config.key);
var helmet = require('helmet');
app.use(helmet({xssFilter: false}));

app.enable('trust proxy');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");

app.use('/', express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
  res.render("landing.ejs");
});

app.post("/search", function (req, res) {
  // get start/end locations
  var url = (req.body.url);

  mc.parse(url)
    .then((data) => {
      res.send(data);
      res.end();
    })
    .catch((e) => {
      console.log('error', e);
    });

});

app.listen(8080, 'localhost', function () {
  console.log("Listening on port 8080");
});