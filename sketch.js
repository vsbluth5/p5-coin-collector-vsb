let logo
let fish = [];
let bubbles = [];
let poppingBubbles = [];
let numPops;

function setup(){
  colorMode(HSB, 360, 100, 100, 1)
  createCanvas(windowWidth, windowHeight);
  numPops = 3;
  createPoppingBubbles();
  createBubbles();

}

function draw(){
  background(230, 90, 50, .8);
  stroke(360, 100, 100, 1);
  text("Pop the "+poppingBubbles.length+" bubbles", 20, 20)
  noStroke()
  drawBubbles();
  drawPoppingBubbles();

}

function mousePressed() {
  
}

function drawBubbles() {
  for (let i = 0; i < bubbles.length; i++){
    fill(bubbles[i].hue, random(10,50), 50, .9)
    bubbles[i].y--;
    if (bubbles[i].y+bubbles[i].diam/2 <= 0) bubbles[i].y = height+bubbles[i].diam;
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
    fill(poppingBubbles[i].hue, random(10,80), 80,.6)
    poppingBubbles[i].y -= .75;
    if (poppingBubbles[i].y+poppingBubbles[i].diam/2 <= 0){
      poppingBubbles[i].y = height+poppingBubbles[i].diam/2;
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
    let size = random(60,80)
    poppingBubbles[i] = {x: xPos, y: yPos, diam: size, hue: h}
  }
}
