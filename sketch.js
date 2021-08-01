var bg,eat,sleep;
var gym,move,iss;
var drink,bath,brush;
var austronaut;

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  eat = loadAnimation("images/eat1.png","eat2.png");
  gym = loadAnimation("images/gym1.png","gym2.png",'gym11.png',"gym22.png");
  move = loadAnimation("images/move.png","move2.png");
  drink = loadAnimation("images/drink1.png","drink2.png");
  bath = loadAnimation("images/bath1.png","bath2.png");
  brush = loadAnimation("images/brush.png");

  

}



function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  austronaut = createSprite(300,230);
  austronaut = loadAnimation("sleeping", sleep);
  austronaut.scale = 0.1;
}

function draw() {
  background(255,255,255); 
  createEdgeSprite(austronaut);
  austronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    austronaut.addAnimation("brushing", brush);
    austronaut.changeAnimation("brushing");
    austronaut.y = 350;
    austronaut.velocityX = 0;
    austronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    austronaut.addAnimation("gymming", gym);
    austronaut.changeAnimation("gymming");
    austronaut.y = 350;
    austronaut.velocityX = 0;
    austronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    austronaut.addAnimation("bathing", bath);
    austronaut.changeAnimation("bathing");
    austronaut.y = 350;
    austronaut.velocityX = 0;
    austronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    austronaut.addAnimation("eating", eat);
    austronaut.changeAnimation("eating");
    austronaut.y = 350;
    austronaut.velocityX = 0;
    austronaut.velocityY = 0;
  }
  if(keyDown("m")){
    austronaut.addAnimation("moving", move);
    austronaut.changeAnimation("moving");
    austronaut.y = 350;
    austronaut.velocityX = 0;
    austronaut.velocityY = 0;
  }
  drawSprites();
}