
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5; 
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	mango1, mango2, mango3, mango4, mango5 = loadImage("images/mango.png");
	stoneObj = loadImage("images/stone.png");
	treeObj = loadImage("images/tree.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1100,100,30);
	mango4 =new mango(1100,100,30);
	mango5=new mango(1100,100,300);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  text("press space to get a second chance to play",60, 15);
  image(boy ,200,340,200,300);
  
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundObject.display();
}

var options= {
	isStatic:false,
	restituion = 0,
	friction=1,
	density=1.2,
}

function keyPressed() {
	if (keyCode == 32){
		matter.Body.setPosition(stoneObj.body,{x: 235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectcollision(Lstone, Lmango){
mangoBodyPosition=lMango.position.body;
stoneBodyPosition=Lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if (distance<=lMango.r+Lstone.r)
{
	Matter.Body.setStatistic(lMango.body,false);
}
}