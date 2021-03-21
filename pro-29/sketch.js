
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var myworld;
arr=[]

function preload(){
	
  }

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	myworld = engine.world;
tbox=new Box(800,245,50,50)
	oct=new Oct(200,100,50,30); 
		groundObject=new Ground(800,550,500,20);
		ground=new Ground(600,700,width,20)
	thread=new Thread(oct.body,{x:200,y:120})
	Engine.run(engine);
	for (var i=575;i<1045;i+=50){
	
	arr.push(new Box(i,495)	)
	if(i!=575&&i!=1025){ 
	arr.push(new Box(i,445))
	if(i!=625&&i!=975){
	arr.push(new Box(i,395))
	if(i!=675&&i!=925){
	arr.push(new Box(i,345))
	if(i!=725&&i!=875)	{
	arr.push(new Box(i,295))
	
	}}}}}
 
}

function draw() {

  background("#34d1ed");
    textSize(30)
  fill("green")
 text("throw the stone towards the tower to break ",50,50)

 tbox.display()
  oct.display()
for( var i=0;i<arr.length;i++){
	arr[i].display()
}
  groundObject.display();
  ground.display()
}

function mouseDragged() {
	Matter.Body.setPosition(oct.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
		thread.fly()
	}
	function keyPressed(){
	 if(keyCode==32) {
	  thread.attach(oct.body)   
	 }  
	}
	

