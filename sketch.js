var fixedRect, movingRect;
var object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 1;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object3 = createSprite(100,100,80,30);
  object3.shapeColor = "green";
  object3.debug = true;

  object4 = createSprite(600,450,50,80);
  object4.shapeColor = "green";
  object4.debug = true;
  object4.velocityY = -0.4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,object3)){
    movingRect.shapeColor = "red";
    object3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    object3.shapeColor = "green";
  }

  bounceOff(object4,fixedRect);

  drawSprites();
}