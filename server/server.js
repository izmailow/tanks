var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('Hello World!' + Math.random());
});

const tanks = [
    {id: 1, positionX: 0, positionY: 0, level: 1},
    {id: 2, positionX: 0, positionY: 0, level: 1},
    {id: 3, positionX: 0, positionY: 0, level: 1},
    {id: 4, positionX: 0, positionY: 0, level: 1},
]

io.on('connection', function(socket){

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
