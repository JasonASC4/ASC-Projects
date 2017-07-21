function setup(){
    createCanvas(1000, 700);
}

var x = 500;
var y = 550;

function draw(){
    background("black");
    fill("#04e000");
     rect(x, 550, 100, 30);
     move();
    setupEnemy();
    keyPressed();
    
}


function setupEnemy(){
    for (var x = 5; x < 1000; x = x+150){
        for (var y = 5; y < 300; y = y+100){
            push();
            translate(x, y);            
            drawEnemy();
            pop();
        }   
    }   
}

function drawEnemy() {
	fill('pink');
    rect(0, 15, 45, 30);
}


function keyPressed(){
    if (keyCode == 32){
        fill(255);
        rect(x+45, y-10, 10, 30);
        y--;
    }
}

function move(){
if (keyIsDown(LEFT_ARROW)){
x -= 5;
}
if (keyIsDown(RIGHT_ARROW)){
x += 5;
}
}