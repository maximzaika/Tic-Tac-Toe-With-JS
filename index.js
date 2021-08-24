var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000; // assigns the port

var users = 0;
var rooms = 0;

/* creates a static directory, which can be used to search folders/files, such
   as .css, .js, .php etc. */
app.use(express.static(path.join(__dirname, '/public')));

/* access to the main page, a.k.a. index.html */
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  /* Detects connected user */
	console.log('PASS:  user connected ' + ++users);
   socket.on('disconnect', function(msg){
     /* Detects disconnection, and reset session for other playrers */
     console.log('PASS:  user disconnected. Sessions resets.');
     socket.broadcast.emit('reset_session', "reset");
   });

  /* by the click of a #create button, calls this socket to emit creation of
     the player1 for all the players */
	socket.on('create_the_game', function(){
     console.log('PASS:  player1 has created the game/room #' + rooms)
     socket.emit('player1');
   });

   /* by the click of a #join button, calls this socket to emit creation of
      the player2 for all the players */
   socket.on('join_the_game', function(){
     console.log('PASS:  player2 has joined the room #' + rooms)
     socket.emit('player2')
   });

   /* by the click of any tile, takes player1 or player2, emits for all other
      players, and performs calculations based on horizontally, vertically, or
      diagonally assigned values */
   socket.on('tile_clicked', function(msg){
  	 console.log('PASS:  turn accepted ' + msg)
     io.emit('tile_clicked', msg);
   });

   /* by the click of any tile, if it is not one of the player's turn, it will
      prompt error */
   socket.on('not_your_turn', function(msg) {
     console.log('ERROR: attempt to skip the turn ' + msg)
     socket.emit('not_your_turn', msg);
   });

   /* by the click of any tile, if it is occupied, it will prompt error */
   socket.on('tile_re_clicked', function(msg) {
     console.log('ERROR: attempt to repeat turn ' + msg)
     socket.emit('tile_re_clicked', msg);
   });

   /* by the reset button, or disconnection, it will trigger reset event */
   socket.on('reset_session', function(msg) {
     console.log('PASS:  session has been reset by the player')
     io.emit('reset_session', "reset");
   });
});

http.listen(3000, function(){
  console.log('listening on *: ' + port);
});
