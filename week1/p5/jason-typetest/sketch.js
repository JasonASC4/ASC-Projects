function setup(){
    createCanvas(800, 800);
    background('gray');
}

var x = 0;
var score = 100;
function draw(){
    background('gray');
    var s = "Type the letters before they dissapear!";
    fill(20);
    textSize(35);
    text(s, 70, 40, 650, 500);
    var s = "Current Score : " + score ;
    fill(20);
    textSize(35);
    text(s, 70, 600, 650, 500);

    var s = "a";
    fill(20);
    textSize(35);
    text(s, x, 200, 700, 500);
    x = x + 1; //or x++
}

function keyTyped() {
  if (key === 'a') {
    textColor('gray');
    score = score + 10;
  } else if (key === 'b') {
    value = 0;
  }
  // uncomment to prevent any default behavior
  // return false;
}
/*var result;
function preload() {
  result = loadStrings('assets/test.txt');
}

function setup() {
  background(200);
  var ind = floor(random(result.length));
  text(result[ind], 10, 10, 80, 80);
}*/