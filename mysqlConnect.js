module.exports = function(context, cb) {
    var mysql = require('mysql@2.7.0');
    connect();

    function connect() {
        var connection = mysql.createConnection({
            host: 'hostname',
            user: 'username',
            password: 'password',
            database: 'db_name'
        });

        connection.connect();
        var query = "SQL Query to execute";
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
