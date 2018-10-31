module.exports = function(app){
    app.get('/getpersonRest:id', function(req, resp){
        resp.render('QueryStringPost');
    });

    app.post('/personRest',function(req, resp){
        console.log(req.body.fname);
        console.log(req.body.lname);
        resp.send("Post data");
    });

    app.delete('/getpersonRest:id', function(req, resp){
        console.log(req.body);
        console.log(req.lname);
        resp.send("Post data");
    });
}