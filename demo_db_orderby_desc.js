var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "Kim",
    password: "myclass2020",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});