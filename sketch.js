var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  //Sprite Torre
  Tower=createSprite(300,300);
  Tower.addImage(towerImg);
  Tower.velocityY=12;
  //Sprite Fantasma
  Ghost=createSprite(200,200,50,50);
  Ghost.addImage(ghostImg);
  Ghost.scale=0.5;
}

function draw(){
  //El Fantasma Brinca
  if (keyDown("space")){
    Ghost.velocityY = -10

  }
  Ghost.velocityY = Ghost.velocityY + 1
  //El Fantasma Se Mueve
  if (keyDown("d")){
    Ghost.x = Ghost.x +8
  }
  if (keyDown("a")){
    Ghost.x = Ghost.x -8
  }
  //Torre Infinita
  if (Tower.y > 400){
     Tower.y=0;
  }
  
  
  
  doors(); 
  background(0);
  drawSprites();
}

function doors(){
  if (frameCount %50 == 0){ 
   //Las Puertas Aparecen
      Door = createSprite(200,0);
      Door.x = Math.round (random(120,400));
      Door.addImage(doorImg);
      Door.velocityY=9;
   //El Fantasma Esta Atras De Las Puertas 
      Ghost.depth = Door.depth;
      Ghost.depth +=1;      
   //La Parte De Abajo De Las Puertas
      Climber = createSprite(200,10);
      Climber.addImage(climberImg);
      Climber.velocityY=9;
      Climber.x = Door.x
      Climber.y = Door.y +70
   //El Fantasma Esta Atras De El Piso De Las Puertas
      Ghost.depth = Climber.depth;
      Ghost.depth +=1;
   //Las Puertas Despawnean
      Door.lifetime = 80
      Climber.lifetime = 75
  }





}
 

