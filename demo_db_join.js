var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "Kim",
    password: "myclass2022",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});