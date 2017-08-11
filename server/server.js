var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('Hello World!' + Math.random());
});

io.on('connection', function(socket){
    console.log('a user connected');
    io.emit('chat message', { user: "Сервер", msg: 'Кое кто подключился'});
  
    socket.on('chat message', function(res){
        io.emit('chat message', {
            user: 'Cheater',
            msg: res.msg
        });
    });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
