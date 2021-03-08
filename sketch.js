var fixedRect, movingRect;
var ip1,ip2,rect1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  rect1 = createSprite(400, 400, 40,100);
  rect1.shapeColor = "purple";
  rect2 = createSprite(500, 400, 70,100);
  rect2.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //rect2.x= World.mouseX;
  //rect2.y =World.mouseY;
  rect2.velocityX=-5;
  // function call
  isTouching(rect1,movingRect);

  console.log(isTouching(rect1,movingRect))
  ballsarbagya(rect1, rect2)
  drawSprites();
}
//replaced movingRect -ip1
//replaced fixedRect -ip2
//ip1 & ip2 are arguments(inputs)
function isTouching(ip1,ip2){
  if (ip1.x - ip2.x < ip2.width/2 + ip1.width/2
    && ip2.x - ip1.x < ip2.width/2 + ip1.width/2
    && ip1.y - ip2.y < ip2.height/2 + ip1.height/2
    && ip2.y - ip1.y < ip2.height/2 +ip1.height/2) {
      //ip1.shapeColor = "red";
     // ip2.shapeColor = "red";
      //return value-output
      return true;
}
else {
  //ip1.shapeColor = "green";
 // ip2.shapeColor = "green";
  return false;
}

}
function ballsarbagya(ip3, ip4){
  if (ip3.x - ip4.x < ip4.width/2 + ip3.width/2
    && ip4.x - ip3.x < ip4.width/2 + ip3.width/2
    && ip3.y - ip4.y < ip4.height/2 + ip3.height/2
    && ip4.y - ip3.y < ip4.height/2 +ip3.height/2) {
      ip3.velocityX=3
      ip4.velocityY=-2
      rect2.velocityX=0;
}
}