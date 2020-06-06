var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(700,200,60,200);
  car.collide(wall);
  speed=random(55,90);
   weight=random(400,1200);
   car.velocityX=speed;

}

function draw() {
  background(255,255,255);  
 if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509
    if(deformation>180){
    car.shapeColor="red";
    }else if(deformation<180&&deformation>100){
      car.shapeColor="yellow";
    }else(deformation<100)
      car.shapeColor="blue";
        
    }
 
  drawSprites();
}

