let logo
let fish = [];
let bubbles = [];
let poppingBubbles = [];
let numPops;

function setup(){
  colorMode(HSB, 360, 100, 100, 1)
  createCanvas(1200, 800);
  numPops = 3;
  createPoppingBubbles();
  createBubbles();

}

function draw(){
  background(230, 90, 50, .8);
  drawBubbles();
  drawPoppingBubbles();

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
  
  function drawPoppingBubbles() {
  for (let i = 0; i < poppingubbles.length; i++){
    fill(poppinhBubbles[i].hue, random(10,50), 50, .9)
    bubbles[i].y--;
    if (poppingubbles[i].y <= 0) bubbles[i].y = height;
    ellipse(poppingBubbles[i].x, poppingBubbles[i].y, poppingBubbles[i].diam)
  }
}

function createPoppingBubbles() {
  for (let i = 0; i < numPops; i++){
    let h = random(50,75)
    let xPos = random(width)
    let yPos = random(height)
    let size = random(25,40)
    poppingBubbles[i] = {x: xPos, y: yPos, diam: size, hue: h}
  }
}
}