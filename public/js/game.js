/* Licence = MIT, 2018, Maxim Zaika (26437929) */

/**
  * @desc disables all the tiles
*/
function disable_tiles() {
	document.getElementById("0,0").disabled = true;
	document.getElementById("0,1").disabled = true;
	document.getElementById("0,2").disabled = true;
	document.getElementById("1,0").disabled = true;
	document.getElementById("1,1").disabled = true;
	document.getElementById("1,2").disabled = true;
	document.getElementById("2,0").disabled = true;
	document.getElementById("2,1").disabled = true;
	document.getElementById("2,2").disabled = true;
}

/**
  * @desc enables all the tiles
*/
function enable_tiles() {
	document.getElementById("0,0").disabled = false;
	document.getElementById("0,1").disabled = false;
	document.getElementById("0,2").disabled = false;
	document.getElementById("1,0").disabled = false;
	document.getElementById("1,1").disabled = false;
	document.getElementById("1,2").disabled = false;
	document.getElementById("2,0").disabled = false;
	document.getElementById("2,1").disabled = false;
	document.getElementById("2,2").disabled = false;
}

/**
  * @desc Gets the value of the Tile, and returns the location based on X,Y
	* @param clicked_val - clicked button will be called
	* @return - [0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]
*/
function reply_click(clicked_id) {
	if (clicked_id === '0,0') {
		return [0,0];
	} if (clicked_id === '0,1') {
		return [0,1];
	} else if (clicked_id === '0,2') {
		return [0,2];
	} else if (clicked_id === '1,0') {
		return [1,0];
	} else if (clicked_id === '1,1') {
		return [1,1];
	} else if (clicked_id === '1,2') {
		return [1,2];
	} else if (clicked_id === '2,0') {
		return [2,0];
	} else if (clicked_id === '2,1') {
		return [2,1];
	} else {
		return [2,2];
	}
}

/**
  * @desc Based on received X from function 'reply_click', checks whether all
	        values are matching horizontally. If value matches, it colors the
					tile
	* @param matrix @param x - matrix, and the x position of the @param clicked_val
	        will be called
  * @return 'h_pass' - success
*/
function horizontal(matrix, x) {
	let val = matrix[x][0];
	if (val === 'X' || val === 'O') {
		for (i=1; i < matrix.length; i++) {
			let another_val = matrix[x][i];
			if (another_val !== val) {
				break; // not matching
			} else {
				val = another_val;
				if (i === 2) { // if success, paint tile and return 'h_pass'
					for (i=0; i < matrix.length; i++) {
						var num = [x,i]
						document.getElementById(num.toString()).style.background='#E9967A'
					}
					return 'h_pass';
				}
			}
		}
	}
}

/**
  * @desc Based on received Y from function 'reply_click', checks whether all
	       values are matching vartically.
	* @param matrix @param y - matrix, and the y position of the @param clicked_val
	        will be called
	* @return 'v_pass' - success
*/
function vertical(matrix,y) {
	let val = matrix[0][y];
	if (val === 'X' || val === 'O') {
		for (i=1; i < matrix.length; i++) {
			let another_val = matrix[i][y];
			if (another_val !== val) {
				break; // not matching
			} else {
				val = another_val;
				if (i === 2) { // if success, paint tile and return 'v_pass'
					for (i=0; i < matrix.length; i++) {
						var num = [i,y]
						document.getElementById(num.toString()).style.background='#E9967A'
					}
					return 'v_pass';
				}
			}
		}
	}
}

/**
  * @desc Based on received X,Y from function 'reply_click', checks whether all
	        values are matching 1 of the diagonals.
	* @param matrix @param x @param y - matrix, and the x,y position of the
	         @param clicked_val
	* @return 'd_pass' - success
*/
function diagonal(matrix,x,y) {
	if ((x,y) === (0,0) || (x,y) === (1,1) || (x,y) === (2,2)) {
		let x = 0;
		let val = matrix[x][0];
		if (val === 'X' || val === 'O') {
			for (i=1; i < matrix.length; i++) {
				let another_val = matrix[i][i]
				if (another_val !== val) {
					break; //not matching
				} else {
					val = another_val;
					if (i === 2) { // if success, paint tile and return 'd_pass'
						document.getElementById("0,0").style.background='#E9967A'
						document.getElementById("1,1").style.background='#E9967A'
						document.getElementById("2,2").style.background='#E9967A'
						return 'd_pass';
					}
				}
			}
		}
	}

	if ((x,y) === (2,0) || (x,y) === (1,1) || (x,y) === (0,2)) {
		let x = 2;
		let val = matrix[x][0];
		if (val === 'X' || val === 'O') {
			for (i=1; i < matrix.length; i++) {
				x -= 1
				let another_val = matrix[x][i]
				if (another_val !== val) {
					break; //not matching
				} else {
					val = another_val;
					if (i === 2) { // if success, paint tile and return 'd_pass'
						document.getElementById("2,0").style.background='#E9967A'
						document.getElementById("1,1").style.background='#E9967A'
						document.getElementById("0,2").style.background='#E9967A'
					  return 'd_pass';
					}

				}
			}
		}
	}
}

/**
  * @desc resets all the tiles, the text on the page, and the game counter
*/
function reset_session(change) {
	change = document.getElementById('0,0');
	change.firstChild.data = ' ';
	change.style.background='#EAEDED';
	change = document.getElementById('0,1');
	change.firstChild.data = ' ';
	change.style.background='#EAEDED';
	change = document.getElementById('0,2');
	change.firstChild.data = ' ';
	change.style.background='#EAEDED';
	change = document.getElementById('1,0');
	change.firstChild.data = ' ';
	change.style.background='#EAEDED';
	change = document.getElementById('1,1');
	change.firstChild.data = ' ';
	change.style.background='#EAEDED';
	change = document.getElementById('1,2');
	change.firstChild.data = ' ';
	change.style.background='#EAEDED';
	change = document.getElementById('2,0');
	change.firstChild.data = ' ';
	change.style.background='#EAEDED';
	change = document.getElementById('2,1');
	change.firstChild.data = ' ';
	change.style.background='#EAEDED';
	change = document.getElementById('2,2');
	change.firstChild.data = ' ';
	change.style.background='#EAEDED';

	$('#turn').text('Create the game, or join the ongoing session.');
	p=0
}

/**
  * @desc create matrix to store X and O, later used for reset as well
	* @param none
	* @return matrix
*/
function create_matrix() {
	matrix = []
	for (var i=0; i<3; i++) {
		matrix[i] = new Array(3);
	}
	return matrix
}

/**
  * @desc main socket.io execution code
	        what is prototype?
		         - allows to add new properties to object constructor
		         - allows to add new methods objects constructors
*/
$(function () {
  var socket = io(); // reads the sockets
	var P1 = 'X'  // assign Player 1
	var P2 = 'O'; // assign Player 2
	var chk_p1 = false; // check whether reset for p1 has been pressed or not
	var chk_p2 = false; // check whether reset for p2 has been pressed or not

	disable_tiles();
	document.getElementById("reset").disabled = true; //disables reset button

  /** @desc create an object called 'player', which identifies
	          the type, such as (P1, P2) by creating or joining the game,
	          and also identifies turns. Whenever the turn is True, it allows
	          the player to make an action */
	var player = function(type) {
		this.type = type;
		this.curr_Turn = true;
	}

	/** @desc sets the current turn, and checks whether it is the player's turn,
	          if it is player's turn it will write 'it is your turn' on the page*/
	player.prototype.set_Curr_Turn = function(next_turn) {
		this.curr_Turn = next_turn;
		if (next_turn) { //if True
			$('#turn').text('It is your turn!');
		} else { //if False
			$('#turn').text('Waiting for your opponent!');
		}
	}

	/** @desc gets players type, such as P1 or P2 */
	player.prototype.getPlayerType = function () {
		return this.type;
	}

	/** @desc gets players current turn, such as True or False */
	player.prototype.get_Curr_Turn = function() {
		console.log('test', this.curr_Turn)
		return this.curr_Turn
	}

	/** @desc creates the game, automatically makes the first player P1 (X), and
	          calls him 'player1' */
	$('#create').on('click', function() {
	  enable_tiles()
		socket.emit('create_the_game', 'player1');
		document.getElementById("reset").disabled = false;
		if (chk_p1 === false) {
		  player = new player(P1);
		}
	});

	/** @desc joins existing game, automatically makes the first player P1 (X), and
	          calls him 'player2' */
	$('#join').on('click', function(){
	  enable_tiles()
		socket.emit('join_the_game', 'player2');
		document.getElementById("reset").disabled = false;
		if (chk_p2 === false) {
		  player = new player(P2);
		}
	});

	/** @desc if player1 is called (by creating the game), it calls his turn as
	          'true', meaning he can go first, or whenever his turn is 'true' */
	socket.on('player1', function(data) {
		player.set_Curr_Turn(true);
	});

	/** @desc if player2 is called (by joining the game), it calls his turn as
	          'false', meaning he needs to go 2nd, or whenever his turn is 'true' */
	socket.on('player2', function(data) {
		player.set_Curr_Turn(false);
  });

  /** @desc whenever the tile is clicked, it executes the following socket actions:
	          Checks whether the tile has already been filled in. If yes - error.
	          If the current turn is not True (!True), it will call the socket called
	          "not your turn" to reject his turn. If current turn is True, it will call
	          the socket called 'tile clicked' */
	$('.tile').on('click', function(msg){
		clicked_val = $(this).attr('id');
		let [x,y] = reply_click(clicked_val);

		//check occupied tile
		if ((matrix[x][y] === 'X' || matrix[x][y] === 'O') && (player.get_Curr_Turn())) {
			socket.emit('tile_re_clicked', $(this).attr('id'));
			return false;
		} else { //tile is empty
			if (!player.get_Curr_Turn()) { //check turn for False
				socket.emit('not_your_turn', $(this).attr('id'));
				return false;
			} else { //turn is True
				socket.emit('tile_clicked', $(this).attr('id'));
				return false;
			}
	  }
	});

	/** @desc whenever the reset button is clicked, it will call the socket to reset the
	          session  */
	$('#reset').on('click', function(){
		socket.emit('reset_session');
		return false;
	});

	/** @desc once this socket is called by the press of a Tile, it will send an alert
	          to the user, saying that the tile has been previously played */
	socket.on('tile_re_clicked', function(msg){
		alert('Selected tile has been previously played!');
		return;
	});

	/** @desc once this socket is called by the press of a Tile, it will send an alert
	          to the user, saying that it is not your turn. */
	socket.on('not_your_turn', function(msg){
		alert('Its not your turn!');
		return;
	});

	/** @desc whenever this socket is called by the press of a Tile, it will execute
	          game. Game will check whether the user wins or loses. This socket will
	          also switch the values of the current turn from True to False, or from
	          False to True.*/
	socket.on('tile_clicked', function(msg) {
		const game = main(msg, player.type) //runs the game

		if (player.get_Curr_Turn()) { //switches turn
			player.set_Curr_Turn(false);
		} else {
			player.set_Curr_Turn(true);
	  }

		if (game === 'win') { // if finds 'win', does all the win procedures
			$('#turn').text('Player ' + matrix[msg[0]][msg[2]] + ' has won the game!');
			document.getElementById("create").disabled = true;
			document.getElementById("join").disabled = true;
			return;
		}

		if (game === 'draw') { // if finds 'draw', does all the win procedures
			$('#turn').text('It is a Draw!');
			return;
		}
	});

	/** @desc once this socket is called, by the press of a reset button, it resets
	          the session  */
	socket.on('reset_session', function() {
		if (player.get_Curr_Turn()) {
			player.set_Curr_Turn(false);
		} else {
			player.set_Curr_Turn(true);
		}
		matrix = create_matrix();
		reset_session();
		disable_tiles();
		chk_p1 = true;
		chk_p2 = true;
		document.getElementById("create").disabled = false;
		document.getElementById("reset").disabled = true;
		document.getElementById("join").disabled = false;
	});
});

let p = 0; //turn iterator
var matrix = create_matrix(); //assigns matrix, used for reset later

/**
  * @desc joins all other functions in the code, and runs the game
	* @param clicked_val @param player
	* @return 'played' or
*/
function main(clicked_val, player) {
	p+=1; //counts the turns
	let change = document.getElementById(clicked_val); //gets the values of x and y
	let [x,y] = reply_click(clicked_val); //assigns the values of x and y

	// during steps 1,3,5,7,9 for X it will insert X only
	if ((p === 1 || p === 3 || p === 5 || p === 7 || p === 9) && (player = 'X')) {
		change.firstChild.data = player;
		matrix[x][y] = player; }

	// during steps 2,4,6,8,10 for o it will insert X only
	if ((p === 2 || p === 4 || p === 6 || p === 8 || p === 10) && (player = 'O')) {
		change.firstChild.data = player;
		matrix[x][y] = player; }

	/* checks for the matching values */
	let horiz = horizontal(matrix,x); // X
	let vert = vertical(matrix,y); // Y
	let diag = diagonal(matrix,x,y); // X,Y

	/* when horizontal, vertical, or diagonal matches all 3 values, game ends,
	   paints, and disables the tiles */
	if ((horiz === 'h_pass') || (vert === 'v_pass') || (diag === 'd_pass')) {
    disable_tiles();
		return 'win'; }

	/*  when all the tiles are filled up, game goes into draw, game disables the
	    tiles */
	if ((p === 9) && (horiz !== 'h_pass') && (vert !== 'v_pass') && (diag !== 'd_pass')) {
    disable_tiles();
		return 'draw';
	}
}
