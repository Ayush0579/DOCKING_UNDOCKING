var state;
var hasDocked = false;

function preload(){
  bgImage = loadImage("Images/spacebg.jpg");
  issImage = loadImage("Images/iss.png");
  craft = loadImage("Images/spacecraft1.png");
  craftDown = loadImage("Images/spacecraft2.png");
  craftLeft = loadImage("Images/spacecraft3.png");
  craftRight = loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  craftSprite = createSprite(100,350,300,300);
  craftSprite.addImage("Base",craft);
  craftSprite.addImage("Down",craftDown);
  craftSprite.addImage("Left",craftLeft);
  craftSprite.addImage("Right",craftRight);
  craftSprite.scale = 0.2;

  iss = createSprite(400, 200, 650/2, 650/2);
  iss.addImage(issImage);
  iss.scale = 0.7;
}

function draw() {
  background(bgImage);

  update();

  drawSprites();
}

function update(){
  if(!hasDocked){
    if(state === "left"){
      craftSprite.changeImage("Left");
      craftSprite.x--;
    }else if(state === "right"){
      craftSprite.changeImage("Right");
      craftSprite.x++;
    }else if(state === "down"){
      craftSprite.changeImage("Down");
    }else if(state === "up"){
      craftSprite.y--;
    }else{
      craftSprite.changeImage("Base");
    }
  
    if(craftSprite.x > 345 && craftSprite.x < 350){
      if(craftSprite.y > 255 && craftSprite.y < 260){
        hasDocked = true;
      }
    }
  }else{
    fill(255);
    text("Docking Successful!", displayWidth/2, displayHeight/2);
  }

  console.log(craftSprite.x, craftSprite.y);
}

function keyPressed(){
  if(keyCode === 37){
    state = "left";
  }else if(keyCode === 39){
    state = "right";
  }else if(keyCode === 40){
    state = "down";
  }else if(keyCode === 38){
    state = "up";
  }
}

function keyReleased(){
  state = "base";
}