
function preload() {
   
}

function setup(){
    var canvas = createCanvas(displayWidth-30,displayHeight-30);
    player = createSprite(200,displayHeight-200,50,50);
   b1 = createSprite(10,displayHeight/2,20,displayHeight);
   b2 = createSprite(displayWidth-50,displayHeight/2,20,displayHeight);
}

function draw(){
    
    background(0);
    player.x = World.mouseX;
    spawnYellowbars();
        drawSprites();
}
function spawnYellowbars(){
    if(World.frameCount%60===0){
        bar1 = createSprite(150,0,20,100);
        bar1.shapeColor = "yellow";        
        bar1.velocityY = 5;

    }
}
