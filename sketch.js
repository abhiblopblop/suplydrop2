const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird1
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    

  
    log1 = new Log(375,100,300, PI/2, true);



    bird1 = new Bird(480,130);
    bird2 = new Bird(430,130);
    bird3 = new Bird(380,130);
    bird4 = new Bird(330,130);
    bird5 = new Bird(280,130);

   // log6 = new Log(300,300,70,PI);

    chain1 = new Chain(bird1.body, { x: 480, y: 100 })
    chain2 = new Chain(bird2.body, { x: 439, y: 100 })
    chain3 = new Chain(bird3.body, { x: 380, y: 100 })
    chain4 = new Chain(bird4.body, { x: 330, y: 100 })
    chain5 = new Chain(bird5.body, { x: 280, y: 100 })
   


    }

function draw(){
    background(backgroundImg);
    Engine.update(engine);
 
   
    log1.display();


    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();

    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();
   

    
    
    
}

function mouseDragged(){

Matter.Body.setPosition(bird1.body, { x: mouseX, y: mouseY } )

}

function keyPressed(){
    if (keyCode === UP_ARROW){
  
      Matter.Body.applyForce( bird1 , bird1.position , {x: 220 , y: 100});
    
    }
  }


