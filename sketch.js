var bananaimage,obstacleimage,backimage,score,obstaclegroup,bananagroup,monkey,monkeyimage

function preload(){
  
  backimage = loadImage("jungle.png");
  
  monkeyimage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  
  
  obstacleimage = loadImage("stone.png");
  
  bananaimage = loadImage("banana.png");  
  
}

function setup() {
  
  createCanvas(800, 400);
  
  score = 0;
  
  back = createSprite(400,150,400,200);
  back.addImage("B",backimage);
  back.scale = 2;
  back.x = back.width/2;
  back.velocityX = -1.5;
  
  
  monkey = createSprite(50,300,10,10);
  monkey.addAnimation("M",monkeyimage);
  monkey.scale = 0.11;
  
  Ground = createSprite(200,315,400,5);
  Ground.velocityX = -1.5;
  Ground.x = Ground.width/2;
  Ground.visible = false;
  
  
  
}

function draw() {
  
  background("white");
  
  if(back.x < 170){
  back.x = back.width/2;
  Ground.x = Ground.width/2;
  }
  
  
  
  drawSprites();
}
  