const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var Box1,Box2,Ground1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Box1=new Box(200,100,50,50);
    Box2=new Box(240,300,50,100);
    Ground1=new Ground(200,395,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    Box1.display();
    Box2.display();
    Ground1.display();
}