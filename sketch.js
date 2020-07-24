
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var border;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball (60,50,20,20);	
border = new Borders(650,680,100,100);
border1 = new Borders(500,680,100,100)
border2 = new Borders(550,600,10,100)
ground = new Ground (400,700,800,30,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  border.display();
  ground.display();
  ball.display();
  border1.display();
  border2.display();
  drawSprites();
 
}



