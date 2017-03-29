$(document).ready(function() {
	// Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();

	var cw = 15;
	var d;
	var food;
	var score;
	var playing = true;
	var snake_array;

	function init() {
   	d = "down"; // Default direction
   	create_snake();
   	create_food();
   	score = 0;

   	// The snake movement uses a timer that trigger the paint function every 50ms
   	if (typeof game_loop != "undefined") {
     	clearInterval(game_loop);
   	}
   	game_loop = setInterval(paint, 50);
	}

	init(); // Initializes the game

	function create_snake() {
  	var length = 5;
  	snake_array = [];
  	for (var i = length-1; i>=0; i--) {
    	// This will create a horizontal snake starting from the top left
    	snake_array.push({x: i, y:0});
  	}
	}


	function create_food() {
  	// This will create a cell with x/y between 0-44
  	// Because there are 45(450/10) positions accross the rows and columns
  	food = {
			x: Math.round(Math.random()*(w-cw)/cw),
			y: Math.round(Math.random()*(h-cw)/cw),
		};
	}

	function gameOver() {
  	ctx.font = "30px Georgia";
  	ctx.fillStyle = "black"
  	ctx.textAlign="center";
  	ctx.fillText("Game Over", canvas.width/2, 200);
  	ctx.fillText('Press "Return" to Continue', canvas.width/2, 270);
  	playing = false;
	}

	function paint() {
		// To avoid the snake trail we need to paint the BG on every frame
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, w, h);

		// Pop out the tail cell and place it infront of the head cell
		var nx = snake_array[0].x;
		var ny = snake_array[0].y;

  	switch (d) {
    	case "right":
      	nx++;
      	break;
    	case "left":
      	nx--;
      	break;
    	case "up":
      	ny--;
      	break;
    	case "down":
      	ny++;
  	}

		// This will restart the game if the snake hits the wall or body collision
		if (nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array)) {
    	gameOver();
			return;
		}

		// If the new head position matches with that of the food,
		// create a new head instead of moving the tail
		if (nx == food.x && ny == food.y) {
			var tail = {x: nx, y: ny};
			score++;
			create_food();
		} else {
			var tail = snake_array.pop(); //pops out the last cell
			tail.x = nx; tail.y = ny;
		}

		snake_array.unshift(tail); // Puts back the tail as the first cell

		for (var i = 0; i < snake_array.length; i++) {
			var c = snake_array[i];
			paint_cell(c.x, c.y);
		}

		// Paints the food
		paint_cell(food.x, food.y);
		// Paints the score board
  	ctx.font = "12px sans-serif"
  	ctx.textAlign = "start"
		var score_text = "Score: " + score;
		ctx.fillText(score_text, 5, h-5);
	}

	function paint_cell(x, y) {
		ctx.fillStyle = "black";
		ctx.fillRect(x*cw, y*cw, cw, cw);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x*cw, y*cw, cw, cw);
	}

	function check_collision(x, y, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].x == x && array[i].y == y) {
      	return true;
    	}
		}
		return false;
	}

	// Keyboard controls now
	$(document).keydown(function(e) {
		var key = e.which;

  	if (playing) {
    	if (key == "37" && d != "right") {
      	d = "left";
    	} else if (key == "38" && d != "down") {
       	d = "up";
    	} else if (key == "39" && d != "left") {
      	d = "right";
    	} else if (key == "40" && d != "up") {
      	d = "down";
    	}
  	} else if (key == '13') {
    	playing = true;
    	init();
  	}
	})
});
