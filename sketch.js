var ball;
var rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ball = new Ball(200,600);
	rect1 = new Rect(700,650,10,50);
	rect2 = new Rect(750,680,100,10);
	rect3 = new Rect(800,650,10,50);

	//Create a Ground
	ground = Bodies.rectangle(400, 680, 800, 10, {isStatic:true} );
 	World.add(world, ground);}

function draw() {
  Engine.update(engine);
  background(0);
  ball.display(); 
  rect1.display();
  rect2.display();
  rect3.display(); 
  rectMode(CENTER);
  rect(400,680,800,10)
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-40});
	}
}



