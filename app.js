var express = require('express');
var app = express();

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

app.get('/', function(req, resp){
    resp.send("<html><head><link href='assets/style.css' type='text/css' rel='stylesheet'/></head><body><h1>Hello World2</h1></body></html>")
});

app.get('/api', function(req, resp){
    resp.json({fname:'Ajay', lname:'Dhope'})
});


app.get('/ejs', function(req, resp){
    resp.render('index');
});

app.get('/api/:id', function(req, resp){
    resp.send("<html><body><h1>"+ req.params.id +"Hello World2''</h1></body></html>")
});

app.get('/ejs/:id', function(req, resp){
    resp.render('index',{ID:req.params.id});
});
app.listen(port);