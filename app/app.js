const express = require('express');
var rp = require('request-promise');
const app = express()
.set('views', 'view')
  .use(express.static('app/src'))

const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3800;
const fs = require('fs');
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


io.on('connection', function(socket){

socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  })

});



http.listen(3800, () => console.log(`Example app listening on port ${port}!`))
