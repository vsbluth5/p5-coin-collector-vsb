let logo
let fish = [];
let bubbles = [];
let seaweed=[];
let sunbeams = []
let food = [];


function setup(){
  colorMode(HSB, 360, 100, 100, 1)
  createCanvas(1200, 800);
  createBubbles();

}

function draw(){
  background(230, 90, 50, .8);
  drawBubbles();

}

function drawBubbles() {
  for (let i = 0; i < bubbles.length; i++){
    noStroke();
    fill(random(200,229), random(95,100), 50, .8)
    ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].diam)
  }
}

function createBubbles() {
  for (let i = 0; i < 200; i++){
    let hue = random(200,230)
    let xPos = random(width)
    let yPos = random(height)
    let size = random(20,25)
    bubbles[i] = {x: xPos, y: yPos, diam: size}
  }
}