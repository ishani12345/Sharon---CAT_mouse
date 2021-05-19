var bgImg;
var cat,catImg1, catImg2,catImg3;
var mouse,mouseImg1,mouseImg2, mouseImg3;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 =  loadAnimation("mouse2.png", "mouse3.png");
    mouseImg3= loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
        //create cat and jerry sprites here
 cat = createSprite(870,600);
 cat.addAnimation("cat_sleeping", catImg1);
 cat.scale =0.2;

 mouse = createSprite(200,600);
 mouse.addAnimation("mouse_standing", mouseImg1);
 mouse.scale =0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if cat and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
cat.velocityX=0;
cat.addAnimation("cat_last", catImg3);
cat.x =300;
cat.scale=0.2;
cat.changeAnimation("cat_last");
mouse.addAnimation("mouse_last", mouseImg3);
mouse.scale=0.15;
mouse.changeAnimation("mouse_last");

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 // if(keyCode === RIGHT_ARROW){
    
//}

if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouse_Teasing", mouseImg2);
    mouse.changeAnimation("mouse_Teasing");
    mouse.frameDelay = 25;

    cat.addAnimation("cat_running",catImg2);
cat.changeAnimation("cat_running");
cat.velocityX = -5;
}

}
