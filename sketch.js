
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=Bodies.rectangle(250, 610, 20, 100, {isStatic:true});
	fill(255);
	World.add(world, boxSprite1);

	dustbin2=Bodies.rectangle(430, 610, 20, 100, {isStatic:true});
	fill(255);
	World.add(world, boxSprite2);
	
	dustbin3=Bodies.rectangle(340, 650, 200, 20, {isStatic:true});
	fill(255);

	class paper{
	var options = {
        isStatic: false, restitution: 0.3, friction: 0.5, density: 1.2
    }
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}



