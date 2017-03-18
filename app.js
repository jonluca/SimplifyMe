'use es6';

var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');

var app = express();
const MercuryClient = require('mercury-client');
const mc = new MercuryClient('5iDxDSbtmURmaGFNBRdK20HXUCMThEHK703HPii8');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req, res) {
    res.render("landing.ejs");
});

app.post("/search", function(req, res) {
    // get start/end locations
    var startLatitude = (req.body.startLatitude);
    var startLongitude = (req.body.startLongitude);
    var endLatitude = (req.body.endLatitude);
    var endLongitude = (req.body.endLongitude);

    mc.parse('https://trackchanges.postlight.com/building-awesome-cms-f034344d8ed')
        .then((data) => {
            console.log('data', data);
        })
        .catch((e) => {
            console.log('error', e);
        });

});


app.listen(3000, function() {
    console.log("Listening on port 3000");
});