var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "Kim",
    password: "myclass2022",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE customrs SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    con.query(sql, function (err, result) {
        iff(err)
        throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});