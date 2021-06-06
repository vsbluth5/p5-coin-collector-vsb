let coin
let score
let timeRemaining

function setup() {
  createCanvas(400, 400)
  coin = {"x": 150, "y": 300}
  score = 0
  timeRemaining = 1000
}

function draw() {
  background(230)
  ellipse(coin.x, coin.y, 20, 20)
  ellipse(mouseX, mouseY, 20, 20)
  
  if (collideCircleCircle(coin.x, coin.y, 20, mouseX, mouseY, 20) && timeRemaining > 0) {
    coin.x = random(width)
    coin.y = random(height)
    score++
  }
  text("You're score is " + score, 10, 20)
  
  if (timeRemaining > 0) {
    timeRemaining--
  }
  text("Time remaining: " + timeRemaining, 10, 40)
  
  if (timeRemaining === 0) {
    text("Game over", 10, 60)
  }
} // end of draw
