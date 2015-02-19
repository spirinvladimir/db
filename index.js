/*jslint node:true*/
var dirty = require('dirty'),
    db = dirty('days.db'),
    http = require('http'),
    days = {};
console.log(__filename);
db.forEach(function (key, val) {
    'use strict';
    days[key] = val;
});

http.createServer(function (req, res) {
    'use strict';
    if (req.url === '/add') {
        console.log(req);
        db.set('df', 'dfdf');
        days.df = 'dfdf';
    } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(days);
    }
}).listen(process.env.VCAP_APP_PORT || 8080, '127.0.0.1');
