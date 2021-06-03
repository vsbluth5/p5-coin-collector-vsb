let logo
let dvdImage
let fish;
let bubbles;
let seaweed;
let sunbeams;
let food;


function setup(){
  colorMode(HSB, 360, 100, 100, 1)
  createCanvas(1200, 800);
 
  // Set up an object with starting values.
  logo = {
    x: 50,
    y: 50,
    xVelocity: 1,
    yVelocity: 1,
    width: 200,
    height: 150
  }
}

function draw(){
  background(230, 90, 50, .8);
  drawBubbles();

  

}

function drawBubbles() {
  for (let i = 0; i < 200; i++){
    noStroke();
    fill(random(200,229), random(95,100), 50, .8)
    ellipse(random(width), random(height), random(10,16))
  }
}

function createBubbles() {
  for (let i = 0; i < 200; i++){
    let color = fill(random(200,229), random(95,100), 50, .8)
    ellipse(random(width), random(height), random(20,25))
  }
}