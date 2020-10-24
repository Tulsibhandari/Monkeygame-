
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

var Score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  monkey=createSprite(80,315,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-12;
  console.log(ground.x);

  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  

  
}


function draw() {
  background("green");
  
 // stroke("white");
 // textSize(20);
 // fill("white");
  //text("score:"+score,450,50);
   
  stroke("black");
  textSize(20);
  fill("black");
  Score=Math.ceil(frameCount/frameRate())
  text("Score:"+Score,100,50);
  
  
  if(keyDown("space")&& monkey.y>100){
    monkey.velocityY=-8;
  }
  
  monkey.velocityY = monkey.velocityY+ 0.8;
  
  
   if(ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  
  food();
  obstacle();
  drawSprites();
  
}


function food(){
  if(frameCount%80==0){
   var banana=createSprite(400,100,10,10);
    banana.y=Math.round(random(120,200));
    banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=100;
    FoodGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount%100==0){
    var  obstacle=createSprite(400,330,10,10);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-6;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
    
    
  }
  
}




