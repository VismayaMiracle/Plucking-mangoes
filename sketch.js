
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;


var stone1;
var ground1;
var boy,boyIMG;
var tree1;
var thrower1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var back,backIMG;

function preload()
{
  boyIMG=loadImage("images/boy.png")
  backIMG=loadImage("images/background.jpg")
	
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
  world = engine.world;
  
  ground1= new ground(340,600,2000,35)
  ground1.visible=false;
	tree1 = new tree(980,400)
  stone1=new stone(180,360,50)
  thrower1 = new launcher(stone1.body,{x:240,y:400})

   boy=createSprite(260,500)
   boy.addImage(boyIMG)
   boy.scale=0.15;



  mango1 = new mango(933,130,20);
	mango2 = new mango(1082,157,30);
	mango3 = new mango(988,76,20);
	mango4 = new mango(902,242,30);
mango5 =  new mango(1156,233,20);
	mango6 = new mango(970,220,20);
	mango7 = new mango(784,235,30);
	mango8 = new mango(877,83,20);
	mango9 = new mango(1031,275,30);
  mango10 = new mango(825,196,20);
  mango11 = new mango(1018,54,20);
  mango12 = new mango(1143,154,20);



	Engine.run(engine);
  
}


function draw() {
  
  background(backIMG);
  strokeWeight(3)
  stroke("yellow")
  fill("red")

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boyIMG ,200,340,200,300);
  
 /// ground1.display();
  tree1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
 mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
mango11.display();
mango12.display();
  

  
thrower1.display();
stone1.display();

detectcollision(stone1,mango1)
detectcollision(stone1,mango2)
detectcollision(stone1,mango3)
detectcollision(stone1,mango4)
detectcollision(stone1,mango5)
detectcollision(stone1,mango6)
detectcollision(stone1,mango7)
detectcollision(stone1,mango8)
detectcollision(stone1,mango9)
detectcollision(stone1,mango10)
detectcollision(stone1,mango11)
detectcollision(stone1,mango12)



 
// fill("red")
// text(mouseX+","+mouseY,mouseX,mouseY)
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  thrower1.fly();
}
function keyPressed(){
  if(keyCode ===  "space"){
    Matter.Body.setPosition(stone1.body,{x:235,y:420})
  }
}
function detectcollision(refstone,refmango){
mangoPos=refmango.body.position
stonePos=refstone.body.position

var distance=dist(stonePos.x ,stonePos.y, mangoPos.x,mangoPos.y)

if(distance<=refmango.r+refstone.r)
{
Matter.Body.setStatic(refmango.body,false);
}


}