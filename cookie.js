var express = require('express');
var wt = require('webtask-tools');
var cookieParser = require('cookie-parser')

var app = new express();
app.use(cookieParser());

app.get('/', function(req, res) {
    req.cookies = req.cookies ||
        'Something...';
    res.send(req.cookies);
});

module.exports = wt.fromExpress(app);
