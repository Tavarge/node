var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user: "Kim",
    password: "myclass2022"
});

con.connect(function(err) {
    if (err) throw err;
});