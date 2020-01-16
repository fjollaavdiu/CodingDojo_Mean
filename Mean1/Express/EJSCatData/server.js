var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/cats/1", function(request, response){
  var data = {
      image: "../cat1.jpg",
      name: "Balazs",
      age: 15,
      food: "Fun Dip",
      sleeping_spots: ["In a shoebox", "The roof"]
  };
  response.render("details", data);
});

app.get("/cats/2", function(request, response){
  var data = {
      image: "../cat2.jpg",
      name: "Will",
      age: 10,
      food: "BBQ",
      sleeping_spots: ["In your dreams", "The couch", "Somewhere in Virginia"]
  };
  response.render("details", data);
});

app.get("/cats/3", function(request, response){
  var data = {
      image: "../cat3.jpg",
      name: "Josh",
      age: 1,
      food: "Chicken",
      sleeping_spots: ["In a sun beam", "The kicthen table"]
  };
  response.render("details", data);
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})