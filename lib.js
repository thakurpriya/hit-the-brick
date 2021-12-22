  function createArrow() {
    var arrow= createSprite(130, 100, 60, 10);
    arrow.addImage(arrowImg);
    arrow.scale= 0.7;
    arrow.y=placeholder.y;
    arrow.velocityX = 22;
    arrow.lifetime = 500;
    arrowGroup.add(arrow);
  }
  
  function createbricks() {
    if(frameCount%90===0){
    var brick= createSprite(random(350, width-250), -5, 60, 20);
    brick.shapeColor= "#C4420D";
    //brick.addImage(brickImg);
    //brick.scale = 0.09;
    brick.velocityY = 5;
    brick.lifetime = 500;
    bricksGroup.add(brick);
    }
  }

  function createYellowBrick() {
    if(frameCount%150===0){
    var yellowBrick= createSprite(random(350, width-250), -5, 60, 20);
    yellowBrick.shapeColor = "yellow";
    yellowBrick.velocityY = 5;
    yellowBrick.lifetime = 500;
    yellowBricksGroup.add(yellowBrick);
    }
   }

  function createTealBrick() {
    if(frameCount% 230===0){
    var yellowBrick= createSprite(random(350, width-250), -5, 60, 20);
    yellowBrick.shapeColor = "teal";
    yellowBrick.velocityY = 5;
    yellowBrick.lifetime = 500;
    TealBricksGroup.add(yellowBrick);
    }
  }
  
  function miss(arrowGroup, flake) {
    flake.remove();
    clr = "yellow";
  }
  
  function miss1(arrowGroup, flake) {
    flake.remove();
    clr = "teal";
  }

  function vanish1(arrowGroup, b) {
    hit.play();
    b.remove();
    score += 1; 
  }
 
  
  
  
  