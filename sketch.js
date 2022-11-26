let color = 255

function preload() {
  soundFormats('mp3', 'ogg');
  bubbles = loadSound('data/bubbles');
}

function setup(){
    createCanvas(windowWidth-2, windowHeight-5);
    background(220)
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Click on Screen", 0, 0, width, height);
}

function draw(){
    fill(color); 
    noStroke()
    background(0, 0, 0, 0.9);
}


function mouseDragged() {
  ellipse(mouseX, mouseY, 50, 50);
//   bubbles.play()
}

function keyPressed() {
    if (color === 0) {
        color = 255;
        bubbles.play();
  } else {
    color = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth-2, windowHeight-5);
  background(220);
}