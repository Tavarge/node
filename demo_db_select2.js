var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    usre: "Kim",
    password: "myclass2022",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        console.log(result);
    });
});