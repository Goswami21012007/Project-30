const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var ground,ground2,ground3,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
function preload(){


}






function setup() {

  var canvas = createCanvas(1200,400);

//create the bodies
ground=new Ground(400,580,100,20)
ground2=new Ground(640,250,220,20)
ground3=new Ground(330,450,250,20)













}

function draw() {
  background(255,255,255);
  
  Engine.update(engine)  
ground.display()
ground2.display()
  ground3.display()
  drawSprites();
}