const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
 
  polygon = Bodies.circle(50,200,20);
  World.add (world,polygon);
  sling = new Slingshot (this.polygon,{x:100,y:200});

  

  //pyramid1
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

 //pyramid2
 //level one
 block17 = new Block(600,150,30,40);
 console.log(block1);
 block18= new Block(630,150,30,40);
 block19= new Block(660,150,30,40);
 block20= new Block(690,150,30,40);
 block21= new Block(720,150,30,40);
 block22= new Block(750,150,30,40);
 block23= new Block(780,150,30,40);
 //level two
 block24= new Block(630,100,30,40);
 block25= new Block(660,100,30,40);
 block26 = new Block(690,100,30,40);
 block27 = new Block(720,100,30,40);
 block28 = new Block(750,100,30,40);
 //level three
 block29 = new Block(660,50,30,40);
 block30 = new Block(690,50,30,40);
 block31 = new Block(720,50,30,40);
 //top
 block32 = new Block(690,15,30,40);

  

}
function draw() {
  background(255); 
 
  textSize(20);
  fill("lightyellow");
  
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  ground.display();
  stand1.display();
  stand2.display();
 
  strokeWeight(2);
  stroke(15);
  fill("lightgreen");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("magenta");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("darkpink");
  block16.display();
 

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("pink");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("golden");
  block29.display();
  block30.display();
  block31.display();
  fill("red");
  block32.display();

}

  
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly();
}