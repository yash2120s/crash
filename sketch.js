const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  boogie1 = new Boogie(600,350,50,50)
boogie2 = new Boogie(500,350,50,50)
boogie3 = new Boogie(400,350,50,50)
boogie4 = new Boogie(300,350,50,50)
boogie5 = new Boogie(200,350,50,50)
boogie6 = new Boogie(100,350,50,50)

chain1 = new Chain(boogie1.body,boogie2.body)
chain2 = new Chain(boggie2.body,boogie3.body)
chain3 = new Chain(boggie3.body,boogie4.body)
chain4 = new Chain(boggie4.body,boogie5.body)
chain5 = new Chain(boggie5.body,boogie6.body)

}

function draw() {
  background(bg);  
  Engine.update(myEngine);

 boogie1.show();
 boogie2.show();
 boogie3.show();
 boogie4.show();
 boogie5.show();
 boogie6.show();

 chain1.show();
 chain2.show();
 chain3.show();
chain4.show();
 chain5.show();
 
  }

  function keyPressed(){
    if(keyCode === 39){
   
    }
  }
  
