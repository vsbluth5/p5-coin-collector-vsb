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
    fill(bubbles[i].hue, random(10,50), 50, .9)
    bubbles[i].y--;
    if (bubbles[i].y <= 0) bubbles[i].y = height;
    ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].diam)
  }
}

function createBubbles() {
  for (let i = 0; i < 100; i++){
    let h = random(200,230)
    let xPos = random(width)
    let yPos = random(height)
    let size = random(5,30)
    bubbles[i] = {x: xPos, y: yPos, diam: size, hue: h}
  }
}