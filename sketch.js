
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Render = Matter.Render;
var dustbinObj1,dustbin2,dustbin3,groundObject	
var world;
var paper;


function preload(){
  
  dust = loadImage("dustbingreen.png");
  
}




function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
  
  
  
	engine = Engine.create();
	world = engine.world;
	

	groundObject=new ground(width/2,670,width,20);
	dustbinObj1=new dustbin(800,600,30,100);
  dustbin2 = new dustbin(900,650,200,20);
    
  dustbin3 = new dustbin(1000,600,30,100);
	paper = new PAPER(350,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  

  groundObject.display();
  dustbinObj1.display();
  dustbin2.display();
  dustbin3.display();
  
  paper.display();

   
  imageMode(CENTER);
  image(dust,890,510,300,300);
 
}

function keyPressed(){
  if(keyCode === 32){
   Matter.Body.applyForce(paper.paper,paper.paper.position,{x:400,y:670})
  }
}

