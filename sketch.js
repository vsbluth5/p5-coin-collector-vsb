let logo
let dvdImage
let tankWidth

function setup(){
  createCanvas(1000, 600);
  // Load the image once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");

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
  background(220);

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