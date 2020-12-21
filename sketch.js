var movingRect,FixedRect


function setup() {
  createCanvas(1200,800);
  FixedRect = createSprite(600, 400, 50, 80);
  FixedRect.shapeColor = "green"
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green"

  movingRect.debug = true
  FixedRect.debug = true
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  if (movingRect.x-FixedRect.x < (movingRect.width/2+FixedRect.width/2) && 
  FixedRect.x-movingRect.x < (movingRect.width/2+FixedRect.width/2) && 
  movingRect.y-FixedRect.y < (movingRect.height/2+FixedRect.height/2) && 
  FixedRect.y-movingRect.y < (movingRect.height/2+FixedRect.height/2) ){
  movingRect.shapeColor = "red"
  FixedRect.shapeColor = "red"
  }  else {
    movingRect.shapeColor = "green"
    FixedRect.shapeColor = "green"
  }
  drawSprites();
}