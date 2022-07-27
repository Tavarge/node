var fs = require('fs');

fs.appendfile('mtnewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});