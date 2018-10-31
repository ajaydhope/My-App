var express = require('express');
var app = express();
var apiRouter = require('./controller/apiController');
var htmlRouter = require('./controller/htmlController');
var port = process.env.port || 3000;

//console.log(process.env);

/* app.get('/', function(req, resp){
    resp.send("<html><body><h1>Hello World</h1></body></html>")
}); */

app.use('/assets', express.static(__dirname + '/public'));
console.log(app.get('view engine'));
app.set('view engine', 'ejs');
console.log(app.get('view engine'));

app.use('/', function(req, resp, next){
    console.log("url:" + req.url);
    next();
})

apiRouter(app);
htmlRouter(app);

app.listen(port);