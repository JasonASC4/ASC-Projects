function setup(){
    createCanvas(800, 800);
    background('purple');
}
//    ellipse(x, 400, 400, 400); ellipse(x, 800, 800, 800);
var x = 0;
function draw(){
    background('purple');
    ellipse(x, 200, 200, 200);
    x = x + 1; //or x++
}