var ground,groundImage;
var blueBalloon,greenBalloon,pinkBalloon,redBalloon;
var blueBalloonImage,greenBalloonImage,pinkBalloonImage,redBalloonImage;
var blueBalloonGroup,greenBalloonGroup,pinkBalloonGroup,redBalloonGroup; 
var bow,bowImage;
var arrow,arrowImage,arrowGroup;
var score;
var play;
var end;
var gameState;


function preload(){
      //load your images here 
      groundImage = loadImage("background0.png");  
      blueBalloonImage = loadImage("blue_balloon0.png");
      bowImage = loadImage("bow0.png");
      greenBalloonImage = loadImage("green_balloon0.png");
      pinkBalloonImage = loadImage("pink_balloon0.png");
      redBalloonImage = loadImage("red_balloon0.png");
      arrowImage = loadImage("arrow0.png");
} 



function setup() {
          createCanvas(600, 600);
  
  //creating groups 
blueBalloonGroup = new Group(); 
greenBalloonGroup = new Group();
redBalloonGroup = new Group();
pinkBalloonGroup = new Group();
arrowGroup = new Group();
        
  
          ground = createSprite(0,0,400,400);
          ground.addImage("ground",groundImage);
          ground.scale = 3;
        
  
         bow = createSprite(500,200,50,50);
         bow.addImage("bow", bowImage);
         bow.scale = 1;
  
         score = 0;
         }
       


function draw(){      
  


        ground.velocityX = -5;
       if(ground.x <0){
         ground.x = ground.width/2
         }
  
      if(gameState===play){
        if(arrowGroup.isTouching(redBalloonGroup)){
                redBalloonGroup.destroyEach();
                arrowGroup.destroyEach();
                score = score +3;
              }
  
      if(arrowGroup.isTouching(blueBalloonGroup)){
                blueBalloonGroup.destroyEach();
                arrowGroup.destroyEach();
                score = score +4;
              }
  
     if(arrowGroup.isTouching(greenBalloonGroup)){
                greenBalloonGroup.destroyEach();
                arrowGroup.destroyEach();
                score = score +1;
              }
     
      if(arrowGroup.isTouching(pinkBalloonGroup)){
                pinkBalloonGroup.destroyEach();
                arrowGroup.destroyEach();
                score = score +2;
               }  
      }
  
      if(gameState===end){ 
        
        

        }
  
         bow.y = mouseY;
  
        if(keyDown("space")){
        createArrow();
         }
        
        var rand = Math.round(random(1,4));
        switch(rand){
          case 1 : spawnRedBalloon();
          break;
          
          case 2 : spawnBlueBalloon();
          break;
          
         case 3 : spawnpinkBalloon();
         break;
           
         case 3 : spawngreenBalloon();
         break;
         
         default : break ;
        }
  
  
  drawSprites();
       
      fill("black");
      textSize (30);
      text ("score: " + score,460,510);
      ground.depth = score.depth;
      score.depth = score.depth+1;
}

function createArrow(){
        arrow = createSprite(500,100,60,10);
        arrow.addImage(arrowImage);
        arrow.x = 450;
        arrow.y = bow.y;
        arrow.velocityX = -8;
        arrow.scale = 0.40; 
        arrowGroup.add(arrow);
         }


function spawnRedBalloon(){
  if(frameCount%80===0){
    redBalloon =createSprite(0,Math.round(random(40,380)),20,20);
    redBalloon.addImage(redBalloonImage);
    redBalloon.scale = 0.1;
    redBalloon.velocityX = 5;
    redBalloon.lifetime = 150;
    redBalloonGroup.add(redBalloon);
  }
}

function spawnBlueBalloon(){
  if(frameCount%80===0){
    blueBalloon =createSprite(0,Math.round(random(50,370)),20,20);
    blueBalloon.addImage(blueBalloonImage);
    blueBalloon.scale = 0.1;
    blueBalloon.velocityX = 5;
    blueBalloon.lifetime= 150;
    blueBalloonGroup.add(blueBalloon);
  }
}

function spawnpinkBalloon(){
  if(frameCount%60===0){
    pinkBalloon=createSprite(0,Math.round(random(100,370)),20,20);
    pinkBalloon.addImage(pinkBalloonImage)
    pinkBalloon.scale = 1.2;
    pinkBalloon.velocityX= 5;
    pinkBalloon.lifetime= 150;
    pinkBalloonGroup.add(pinkBalloon);
  }
}

function spawngreenBalloon(){
  if(frameCount%70===0){
    greenBalloon=createSprite(0,Math.round(random(60,400)),20,20);
    greenBalloon.addImage(greenBalloonImage);
    greenBalloon.scale = 0.1;
    greenBalloon.velocityX = 5;
    greenBalloon.lifetime = 150;
    greenBalloonGroup.add(greenBalloon);
  }
}














