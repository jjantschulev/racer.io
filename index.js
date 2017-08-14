const PORT = 3013;

var express = require('express');
var app = express();
var server = app.listen(PORT, function () {
  console.log("racer.io server running on port: " + PORT);
});
app.use(express.static('public'));

var io = require("socket.io")(server);

io.on('connection', function (socket) {
  console.log("new client connected");
})
