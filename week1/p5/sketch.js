function setup(){
    createCanvas(500, 500);
    //background
    background(225);
    //making the background
    fill('yellow');
    ellipse(width / 2, height / 2, 400);
    //everything else is black
    fill('black');
    //line
    //thicc lines
    strokeWeight(10);
    //top sunglass line
    line(80, 150, 420, 150);
    //mouth line
    line(150, 350, width - 150, 350);
    //rectangles
    rect(150, 150, 80, 40);
    rect(width - (150 + 80), 150, 80, 40);
}

function mousePressed(){
    console.log("The mouse is at this x : " + mouseX + ".");
     console.log("The mouse is at this y : " + mouseX + ".");
}