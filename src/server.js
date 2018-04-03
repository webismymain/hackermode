var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http, {origins:'localhost:*'})

io.on('connection', function (socket) {
  console.log('user connected')
})

app.set('origins', 'http://localhost:8080')
http.listen(3000, function () {
  console.log('listening on *:3000')
})
