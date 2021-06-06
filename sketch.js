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
}
  
  function drawPoppingBubbles() {
    console.log("numPops = "+poppingBubbles.length)
  for (let i = 0; i < poppingBubbles.length; i++){
    fill(poppingBubbles[i].hue, random(10,50), 80, 1)
    poppingBubbles[i].y -= 1;
    if (poppingBubbles[i].y <= 0){
      poppingBubbles[i].y = height;
      poppingBubbles[i].x = random(width);
    } 
    ellipse(poppingBubbles[i].x, poppingBubbles[i].y, poppingBubbles[i].diam)
  }
}

function createPoppingBubbles() {
  for (let i = 0; i < numPops; i++){
    let h = random(350,360)
    let xPos = random(width)
    let yPos = random(height)
    let size = random(45,65)
    poppingBubbles[i] = {x: xPos, y: yPos, diam: size, hue: h}
  }
}
