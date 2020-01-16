var express = require("express");
var fs = require("fs");
var bodyparser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));
app.use(bodyparser.urlencoded({ extended: true }));

var server = app.listen(8000, function () {
    console.log('Listening on port 8000')
});

var io = require('socket.io').listen(server)

app.get('/', function (request, response) {
    response.render("index");
})

io.sockets.on('connection', function (socket) {
    socket.on("posting_form", function (data) {
        var randomNum = Math.floor((Math.random() * 1000) + 1);
        socket.emit('updated_message', { response: data });
        socket.emit('random_number', { response: randomNum });
    })
})