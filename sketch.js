var road1, road2, road3, road4, road5, road6, roadGroup, roadImg;
var player, playerImg, player2Img;
var finishLine;
var pavementImg;

function preload(){
 roadImg = loadImage("./images/road.jpeg");
 playerImg = loadAnimation("./images/player1.png", "./images/player2.png");
 pavementImg = loadImage("./images/paving.png")

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  road1 = createSprite(300,175,600,100);
  road1.addImage(roadImg);
  road1.scale = 2;
  //road1.velocityX = 10;

  road2 = createSprite(300, 475, 600,100);
  road2.addImage(roadImg);
  road2.scale = 2;
  //road2.velocityX = 10;

  road3 = createSprite(300,775 , 600, 100);
  road3.addImage(roadImg);
  road3.scale = 1.9;
  //road3.velocityX = 10;

  player = createSprite(windowWidth/2, windowHeight - 30, 100, 50);
  player.addAnimation ("walking", playerImg);
  player.scale = 0.2;
  
  finishLine = createSprite(windowWidth/2,25, windowWidth, 15);
  finishLine.shapeColor = color(255, 255, 0)

  if(road1.x > windowWidth)
  {
     road1.x = width /2;
  }

  if(road2.x > windowWidth)
  {
     road2.x = width /2;
  }

  if(road3.x > windowWidth)
  {
     road3.x = width /2;
  }

  createPaving()
}


function draw(){
 background("white");
 if(keyDown(RIGHT_ARROW))
 {
   player.x += 5;
 }

 if(keyDown(LEFT_ARROW))
 {
   player.x -= 5;
 }

 if(keyDown(UP_ARROW))
 {
   player.y -= 5;
 }

 if(keyDown(DOWN_ARROW))
 {
   player.y += 5;
 }

  drawSprites();
 
}

function createPaving()
{
  for(i = 0; i<3; i++)
  {
    var pavement = createSprite(20+10*i, y, 50, 25)
    pavement.addImage(pavingImg);
  }
}