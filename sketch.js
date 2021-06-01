var cat, catImage,cat2,cat2Image,cat3,cat3Image;
var mouse, mouseImage,mouse2,mouse2Image,mouse3,mouse3Image;
var bgImg;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImage=loadImage("images/cat1.png");
    cat2Image=loadImage("images/cat2.png","images/cat3.png");
    cat3Image=loadImage("images/cat4.png");
    mouseImage=loadAnimation("images/mouse1.png");
    mouse2Image=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Image=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background("bgImg");
    cat=createSprite(500,400,1,1);
    cat.addAnimation("cat5",catImage);
    mouse=createSprite(850,400,1,1);
    mouse.addAnimation("mouse5",mouseImage);       
   

}

function draw() {
 keyPressed();
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

  if(cat.x- mouse.x < (cat.width - mouse.width)/2){
      mouse.addAnimation("mouseHappy",mouse3Image);
      mouse.changeAnimation("mouseHappy");
      cat.velocityX=0;
       cat.addAnimation("catHappy",cat3Image);
       cat.changeAnimation("catHappy");


  }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keycode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse2Image);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;
      cat.addAnimation("catMoving",cat2Image);
      cat.changeAnimation("catMoving");
      cat.velocityX=-4;
      cat.frameDelay=25;
  }


}
