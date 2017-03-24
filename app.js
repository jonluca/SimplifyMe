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


app.listen(8080, 'localhost', function() {
    console.log("Listening on port 8080");
});