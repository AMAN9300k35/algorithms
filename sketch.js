
var fixedRect,movingRect,obstacle

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 100, 50);
 fixedRect.shapeColor="yellow";
 fixedRect.debug=true;

 movingRect = createSprite(100,100,50,100);
 movingRect.shapeColor="green";
 movingRect.debug=true;

 obstacle = createSprite(132,190,50,100);
 obstacle.shapeColor="yellow";
 obstacle.debug=true;

}

function draw() {
  background("black");  
  movingRect.y=mouseY;
  movingRect.x=mouseX;
  console.log(movingRect.x-fixedRect.x);
 
  if(isTouching(fixedRect,movingRect)){
fixedRect.shapeColor="red";
movingRect.shapeColor="blue";

  }
 else{fixedRect.shapeColor="green";
      movingRect.shapeColor="yellow"}

      if(isTouching(obstacle,movingRect)){
        obstacle.setVelocity(3,4);
      }

  drawSprites();
}
