module.exports = function(context, cb) {
    var mysql = require('mysql@2.7.0');
    connect();

    function connect() {
        var connection = mysql.createConnection({
            host: '',
            user: '',
            password: '',
            database: ''
        });

        connection.connect();
        var query = "SELECT * FROM " + context.data.table; //aradhane, events, festivals
        connection.query(query,
            function(err, rows, fields) {
                if (err) {
                    throw err;
                } else {
                    connection.end();
                    cb(null, rows);
                }
            }
        );
    }
}
