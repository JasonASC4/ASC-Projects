var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;

function setup(){
    createCanvas(500, 500);
    background(135, 206, 250);
}

function draw() {
    background(135, 206, 250);

	var d = dist(500/2, 500/2, mouseX, mouseY);

  	fill (random(200, 250), random(200, 250), random(200, 250));
  	ellipse (x, y, d, d);

 	 x = x + xspeed;
  	
  	 if (x > 500 || x < 0)  {
     	xspeed = -xspeed;
  	}
      y = y + yspeed;

  	if (y > 500 || y < 0) {
	 	  yspeed = -yspeed;
  	}
}