var car,wall;
var speed,weight,deformation;
function setup() {
  createCanvas(800,400);
  car=createSprite(50,200,20,30)
  wall=createSprite(700,200,10,300)
  wall.shapeColour="pink";
  car.shapeColour="blue";
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;

}

function draw() {
  background(255,255,255);  
  drawSprites();

  text("Global Car Sfety organization",300,50)


  if (wall.x-car.x<(car.width+wall.width/2)) {
  	deformation=(0.5*weight*speed*speed)/22500
  	if (deformation<80) {
     car.shapeColour="green";
  	}
  	else if (deformation<180&&deformation>80) {
  		car.shapeColour="yellow";
  	}
  	else{
  	car.shapeColour="red";
  	}
  	car.velocityX=0
  }

}