const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var engine,world;
var divisionHeight=300;
var plinkos=[],particles=[];
var divisions=[];
function setup() {

   createCanvas(480,800);
  engine = Engine.create();
 world = engine.world;
  for(var i=0;i<width;i=i+80){
    divisions.push(new Divisions(i,650,10,divisionHeight))
  }
  for( var j=45;j<width;j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
 for( var k=15;k<width;k=k+50){
    plinkos.push(new Plinko(k,175,10))
  }
  for( var l=45;l<width;l=l+50){
    plinkos.push(new Plinko(l,275,10))
  }
  for( var m=15;m<width;m=m+50){
    plinkos.push(new Plinko(m,375,10))
  }
ground = new Ground(100,795,775,20);

Engine.run(engine);
}

function draw() {
  background(0);  
 for(var a=0;a<divisions.length;a++){
   divisions[a].display();
 }
 for(var b=0;b<plinkos.length;b++){
  plinkos[b].display();
}
if(frameCount%60===0){
particles.push(new Particle(random(230,250),10,10))
}
for(var c=0;c<particles.length;c++){
  particles[c].display();
}
ground.display();
}