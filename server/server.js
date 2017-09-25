var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var crypto = require('crypto');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
    {login: "admin", pass: "admin", sesionID: null, socket: null},
    {login: "guest", pass: "", sesionID: null, socket: null},
    {login: "", pass: "", sesionID: null, socket: null}
]

app.post('/api', function(req, res){
    let loginned = false;
    users.forEach(function(user) {
        if (user.login === req.body.login && user.pass === req.body.pass){

            user.sesionID = crypto.randomBytes(20).toString('hex')
            res.send(JSON.stringify(user))
            loginned = true
            return false
        }
    }, this)
    if (!loginned) {
        res.send(JSON.stringify({error: 1}))
    }
    //res.send('Hello World!' + Math.random());
});

const tanks = [
    {id: 1, user: null, positionX: 0, positionY: 0, level: 1},
    {id: 2, user: null, positionX: 10, positionY: 10, level: 1},
    {id: 3, user: null, positionX: 20, positionY: 20, level: 1},
    {id: 4, user: null, positionX: 40, positionY: 0, level: 1},
]
const clients = []

io.on('connection', function(socket){
    clients.push(socket.id)

    io.emit('chat message', { user: "Сервер", msg: 'Кое кто подключился', clients: clients});

    io.emit('move tank', tanks)
  
    socket.on('chat message', function(res){
        io.emit('chat message', {
            user: socket.id.slice(0, 3),
            msg: res.msg,
            clients: clients
        });
        if (res.msg === "Odin?") {
            io.emit('chat message', {
                user: 'Сервер',
                msg: 'I`m here',
                clients: clients
            });
        }

    });

    socket.on('disconnect', function() {

        const i = clients.indexOf(socket.id);
        clients.splice(i, 1);
        
        io.emit('chat message', {
            user: 'Сервер',
            msg: 'Кое кто отключился',
            clients: clients
        });
    });
});

http.listen(3001, function(){
    console.log('listening on *:3001');
});
