function setup(){
    createCanvas(700, 700);
    background(450);

}



function mouseDragged() {
  ellipse(mouseX, mouseY, 70, 160);
  fill(random(255), random(255), random(255));
 
  return false;
}

