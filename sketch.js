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

  // Check to make sure the image isn't at or over the edge of the screen for horizontal movement.
  if (logo.x > width - logo.width) {
    // If it's too far right, make velocity negative
    logo.xVelocity = -1 * logo.xVelocity;
  } else if (logo.x < 0) {
    // if it's too far left, make the velocity positive
    logo.xVelocity = -1 * logo.xVelocity;
  }

  // Same check, but for vertical movement. Reverse it in either case.
  if (logo.y > height - logo.height) {
    logo.yVelocity = -1 * logo.yVelocity;
  } else if (logo.y < 0) {
    logo.yVelocity = -1 * logo.yVelocity;
  }

  // Move the shape by changing the values of x and y
  logo.x += logo.xVelocity;
  logo.y += logo.yVelocity;

  // Draw the logo at the new position.
  image(dvdImage, logo.x, logo.y, logo.width, logo.height);
}

function drawBubble() {
  for (let i = 0; i < 500; i++){
    noStroke();
    fill(369, randin(90,100), 50, .8)
    ellipse(random(width), random(height), random(1,5))
  }
}