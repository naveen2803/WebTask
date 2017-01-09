var express = require('express');
var wt = require('webtask-tools');
var cookieParser = require('cookie-parser')

var app = new express();
app.use(cookieParser("This is my passphrase"));

app.get('/', function(req, res) {
    if (req.cookies.beenHereBefore === 'yes') {
        res.send("You have been here before");
    } else {
        res.cookie('beenHereBefore', 'yes');
        res.send('This is you first time');
    }
});

app.get('/clear', function(req, res) {
    res.clearCookie('beenHereBefore');
    res.redirect('/');
});
module.exports = wt.fromExpress(app);
