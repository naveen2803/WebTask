var app = new (require('express'))();
var wt = require('webtask-tools');

app.get('/', function (req, res) {
    res.send('Hello, ' + req.user.name);
});

module.exports = wt.fromExpress(app).auth0();