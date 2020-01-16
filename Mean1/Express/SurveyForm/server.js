var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({secret: 'billcipher'}));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (request, response){
    response.render('index')
})

app.post("/process", function (request, response){
	request.session["form"] = request.body;

    response.redirect('/result')
})

app.get("/result", function (request, response){
	var data = {
		name: request.session.form.name, 
		location: request.session.form.location, 
		favLanguage: request.session.form.favLanguage, 
		comment: request.session.form.comment
	}

    response.render('result', data)
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})