var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  block1 = createSprite(100,580,150,20)
  block1.shapeColor="red"
  block2 = createSprite(300,580,150,20)
  block2.shapeColor="blue"
  block3 = createSprite(500,580,150,20)
  block3.shapeColor="yellow"
  block4 = createSprite(700,580,150,20)
  block4.shapeColor="green"
  box = createSprite(random(20,750),100,50,50)
  box.shapeColor="white"
  box.velocityY= 10
  
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges = createEdgeSprites()
  box.bounceOff(edges)
  if(istouching(box,block1)){
      box.shapeColor = "red"
  }
  box.bounceOff(block1)
  if(istouching(box,block2)){
    box.shapeColor = "blue"
}
box.bounceOff(block2)
if(istouching(box,block3)){
    box.shapeColor = "yellow"
}
box.bounceOff(block3)
if(istouching(box,block4)){
    box.shapeColor = "green"
}
box.bounceOff(block4)
  drawSprites();


    //add condition to check if box touching surface and mak
    
}
function istouching(object1,object2){

    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        return true;
   
  }
  else {
    return false;
  
  }
}