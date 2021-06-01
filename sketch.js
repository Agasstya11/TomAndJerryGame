var cat, catImage,cat2,cat2Image,cat3,cat3Image;
var mouse, mouseImage,mouse2,mouse2Image,mouse3,mouse3Image;
var bgImg;

function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    catImage=loadAnimation("cat1.png",);
    cat3Image=loadAnimation("cat4.png",);
    cat2Image=loadAnimation("cat3.png",);
    mouseImage=loadAnimation("mouse2.png",);
    mouse2Image=loadAnimation("mouse3.png",);
    mouse3Image=loadAnimation("mouse1.png",);
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
    background(255);
    //Write condition here to evalute if tom and jerry collide

  if(cat.x- mouse.x < (cat.width - mouse.width)/2){
      mouse3.addAnimation("mouseHappy",mouse3Image);
      mouse3.changeAnimation("mouseHappy");
      cat.velocityX=0;
       cat3.addAnimation("catHappy",cat3Image);
       cat3.changeAnimation("catHappy");


  }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keycode === LEFT_ARROW){
      mouse2.addAnimation("mouseTeasing",mouse2Image);
      mouse2.changeAnimation("mouseTeasing");
      mouse2.frameDelay=25;
      cat2.addAnimation("catMoving",cat2Image);
      cat2.changeAnimation("catMoving");
      cat2.velocityX=-4;
      cat2.frameDelay=25;
  }


}
