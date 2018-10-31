var bodyParser = require('body-parser');
var urlEncoder = bodyParser.urlencoded({extended:false});
var jsonParser1 = bodyParser.json();
var peopleserver = [
    {
         name : 'Ajay1'
    },
    {
        name : 'Ajay2'
   },
   {
         name : 'Ajay4'
   },
]
module.exports = function(app){
    app.get('/', function(req, resp){
        resp.send("<html><head><link href='assets/style.css' type='text/css' rel='stylesheet'/></head><body><h1>Hello World Via Git Hub</h1></body></html>")
    });

    app.get('/api', function(req, resp){
        resp.json({fname:'Ajay', lname:'Dhope'})
    });


    app.get('/ejs', function(req, resp){
        resp.render('index');
    });

    app.get('/ejsAngularJs', function(req, resp){
        //resp.render('index2');
        resp.render('index2', {peopleserver:peopleserver});
    });

    app.get('/api/:id', function(req, resp){
        resp.send("<html><body><h1>"+ req.params.id +"Hello World Changed in Git Hub''</h1></body></html>")
    });

    app.get('/ejs/:id', function(req, resp){
        resp.render('index',{ID:req.params.id});
    });

    app.get('/ejsq/:id', function(req, resp){
        resp.render('QueryString',{ID:req.params.id, Qstr:req.query.qstr});
    });

    app.get('/getperson', function(req, resp){
        resp.render('QueryStringPost');
    });

    app.post('/person', urlEncoder, function(req, resp){
        console.log(req.body.fname);
        console.log(req.body.lname);
        resp.send("Post data");
    });

    app.post('/personJson', jsonParser1, function(req, resp){
        console.log(req.body);
        console.log(req.body.lname);
        resp.send("Post data");
    }); 

}