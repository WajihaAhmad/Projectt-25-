
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ground1;
var paper; 
var paper1;
var dustbin;
var dustbin1;

function preload()
{

}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(500,480,width,40)
	paper1 = new Paper(200,50,50)
	dustbin1 = new Dustbin(845,400,900,400)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  paper1.display();
  dustbin1.display();
 


 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}





