
var yellowBricksGroup,yellowBrickImg;
var TealBricksGroup,yellowBrickImg;

var score = 0;
var missed = 0;
var arrowImg;
var placeholder;

var Loc;
var brick, brickImg, bricksGroup;
var i = 610;
var j = 10;
var clr=null;
var hit;
var hitWorng;
var gameState = "wait";
var gameOver, gameOverImg;
var reset, resetImg;
var blockage,stockGroup,stock1Group;

function preload(){
  yellowBrickImg= loadImage("snow4.webp");
  yellowBrickImg= loadImage("snow5.webp");

  arrowImg = loadImage("arrow.png");
  //brickImg = loadImage("brick1.png");

  resetImg = loadImage("reset.png");
 
  hit = loadSound("collided.wav");
  hitWorng = loadSound("jump.wav");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  reset = createSprite(width/2+80,height/2,100,100);
  reset.shapeColor = "green";
  reset.visible = false;
  reset.addImage(resetImg);

  placeholder = createSprite(140,height/2,10,10);
  placeholder.addImage(arrowImg);
  placeholder.scale= 0.8;

  Loc = createSprite(width/2,height-2,width,1);
  Loc.visible = false;

  blockage = createSprite(180,10,2,2);
  blockage.visible = false;
  
  arrowGroup = new Group();
  bricksGroup = new Group();
  yellowBricksGroup = new Group();
  TealBricksGroup = new Group();
  stockGroup = new Group();
  stock1Group = new Group();
}

function draw() {
  background(0); 
  frameRate(190);

  textSize(30);
  fill(255);
  text("Score : "+score,width-200,50);
  fill("#FF4500")
  text("Missed : "+missed,width-200,90);
  
  fill("rgba(231, 226, 231, 0.1)");
  rect(5,0,90,height);
  rect(185,0,90,height);
 
  if(gameState == "wait"){
  stroke("green");
  strokeWeight(2);
  fill(255);
  text("**press space to start and shoot the arrow**",width/2-250,200);
  }

  if(gameState == "wait" && keyDown("space")){
      gameState = "play";
  }

  if(gameState == "play")
  {
    if (keyDown("space")) {
      createArrow();
      }
    if (keyDown("down")) {
      placeholder.y += 7;
      }  
    if (keyDown("up")) {
      placeholder.y -= 7;
      }   
 
    createYellowBrick();
    createTealBrick();
    createbricks();

    arrowGroup.isTouching(yellowBricksGroup, vanish1);
    arrowGroup.isTouching(TealBricksGroup, vanish1);

    if(Loc.isTouching(yellowBricksGroup, miss)||Loc.isTouching(TealBricksGroup, miss1)){
      missed += 1;
      if(i>0)
        {var stock = createSprite(50,i,80,26);
        i-=31;
        stockGroup.add(stock);
        if(clr === "yellow"){stock.shapeColor = "yellow";}
        else{stock.shapeColor = "teal";}
        }
      else{
        gameState = "end";
        }  
    }

    if(arrowGroup.isTouching(bricksGroup,(arrowGroup, b)=>{b.remove();hitWorng.play();})){
      if(j<600)
        {var stock1 = createSprite(230,j,80,26);
        j+=31;
        stock1Group.add(stock1);
        stock1.shapeColor = "#C4420D";
        blockage.y = j/2-20;
        blockage.height = j;
        }
      else{
        gameState = "end";
        }  
    }

    arrowGroup.bounceOff(blockage);

  }

  if(gameState == "end")
  {
    endGame();
    if(mousePressedOver(reset)) {
      resetGame();
    }
  }

 
  drawSprites();
  
}


function endGame(){
  
  reset.visible = true;

  bricksGroup.setLifetimeEach(-1);
  yellowBricksGroup.setLifetimeEach(-1);
  TealBricksGroup.setLifetimeEach(-1);
    
  bricksGroup.setVelocityYEach(0);
  yellowBricksGroup.setVelocityYEach(0);
  TealBricksGroup.setVelocityYEach(0);

  stroke(255);
  strokeWeight(2);
  fill(255,0,0);
  textFont("Forte");
  textSize(80);
  text("GAmE oVeR !!!",width/2-170,200);
}

function resetGame(){
  
  
  bricksGroup.destroyEach();
  yellowBricksGroup.destroyEach();
  TealBricksGroup.destroyEach();
  stockGroup.destroyEach();
  stock1Group.destroyEach();

  score = 0;
  missed = 0;
  j=0;
  i=610;

  gameState = "wait";
  
}


 

 
