// Token : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0ODM5MTg0Mzl9.SZBe_0DGrbPfVm1bUPd7AlYhGTGd-6uOMxvuZqVlpK8
var express = require('express');
var bodyParser = require('body-parser');
var wt = require('webtask-tools');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');

var key = "This is the private key";

var app = new express();
app.use(bodyParser.urlencoded());
app.use(expressJWT({
    secret: key
}));

app.get('/', function(req, res) {
    res.send("hello");
});

module.exports = wt.fromExpress(app);
