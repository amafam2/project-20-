
var fixedrectangel
var movingrectangel

function setup() {
  createCanvas(1200,800);
fixedrectangel=createSprite(200, 200, 50, 50);
movingrectangel=createSprite(600, 600, 60, 80);
fixedrectangel.shapeColor="black"
movingrectangel.shapeColor="black"
}

function draw() {
  background("red");  
  

  movingrectangel.y=  World.mouseY;
   movingrectangel.x=World.mouseX;

if(movingrectangel.x-fixedrectangel.x===fixedrectangel.width/2+movingrectangel.width/2){
  movingrectangel.shapeColor="yellow"
  fixedrectangel.shapeColor="yellow"
  
}
else{
  fixedrectangel.shapeColor="white"
movingrectangel.shapeColor="white" 
}

     drawSprites();
    }