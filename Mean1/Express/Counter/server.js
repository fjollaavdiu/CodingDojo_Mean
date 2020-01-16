var express = require("express");
var session = require('express-session');
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({secret: 'billcipher'}));

app.get('/', function (request, response){
  if (request.session.count){
		request.session.count++;
	}
	else {
		request.session.count = 1;
	}
	response.render("count", { count: request.session.count });
});

app.get('/add2', function(request, response) {
	request.session.count++;
	response.redirect("/")
})

app.get('/reset', function(request, response) {
	request.session.count = 0;
	response.redirect("/")
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})