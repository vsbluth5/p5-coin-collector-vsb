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
  stroke(360, 0, 100, 1);
  textSize(16);
  if (poppingBubbles.length > 0){
    text("Pop the "+poppingBubbles.length+" larger bubbles by clicking on them", 20, 20)
  }else {
    text("You've popped all the bubbles! Click to create more bubbles!", 20, 20)
  }
    if (mouseIsPressed) {
    text("You clicked at ("+mouseX+", "+mouseY+")", 20, 40);
  }
  noStroke()
  drawBubbles();
  drawPoppingBubbles();

}

function mousePressed() {
  if (poppingBubbles.length == 0) {
    numPops++;
    createPoppingBubbles()
  }
  else {                     
    for (let i = 0; i < poppingBubbles.length; i++) {
      if (distance (poppingBubbles[i].x, poppingBubbles[i].y, mouseX, mouseY) <= poppingBubbles[i].diam/2) {
        console.log("You clicked on one");
        poppingBubbles.splice(i,1);
      }
    }
  }
  
  function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
  }

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
    fill(poppingBubbles[i].hue, random(10,80), 80,.3)
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
    let yPos = random(height, 2*height)
    let size = random(60,100)
    poppingBubbles[i] = {x: xPos, y: yPos, diam: size, hue: h}
  }
}
