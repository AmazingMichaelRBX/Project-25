
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	dustbinObj1 = new dustbin(1200,650,100,100)
	//dustbinObj2 = new dustbin(780,630,20,100)
	//dustbinObj3 = new dustbin(680,650,200,20)
	
	paperObj1 = new Paper(200,450,70)
    groundObj = new Ground(width/2,670,width,20)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinObj1.display();
  //dustbinObj2.display();
  //dustbinObj3.display();
  paperObj1.display();
  groundObj.display();

}



function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObj1.body,paperObj1.body.position,{x:85,y:-85});
	}
}

