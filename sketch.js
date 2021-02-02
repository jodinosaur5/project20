var cat, mouse
var catimg,sit,lay
var mouseimg,cheese,glass
var garden,gardimg


function preload() {
    //load the images here
    gardimg=loadImage("garden.png");
    catimg=loadAnimation("cat2.png","cat3.png");
    sit=loadImage("cat4.png");
    lay=loadImage("cat1.png");
    mouseimg=loadAnimation("mouse2.png","mouse3.png");
    glass=loadImage("mouse4.png");
    cheese=loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400,1000,800);
    garden.addImage("garden",gardimg);
    
    

    cat=createSprite(700,600,20,20);
    cat.addImage("siting",sit);
    cat.addAnimation("running",catimg)
    cat.addImage("laying",lay)
    cat.scale=0.20
    cat.debug=true

    
    mouse=createSprite(200,650,200,200);
    mouse.addImage("mouse1",glass);
    mouse.addAnimation("sit",mouseimg);
    mouse.addImage("pressint",cheese);
    mouse.scale=0.1;
    mouse.debug=true
}

function draw() {
    background(255);
    text(mouseX + ',' + mouseY ,10,45);


    if(cat.x - mouse.x < (cat.width - mouse.width) /2){
        cat.velocityX=0;
        keyCode=RIGHT_ARROW
        cat.changeImage("laying")
        mouse.changeImage("pressint")
    }
    
    keyPressed()
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX=-5
        cat.changeAnimation("running")
        mouse.changeAnimation("sit")
    }
  


}