var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(600, 550);

	// fairyVoice.play();

	fairy = createSprite(130, 320);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	var star_options={
		isStatic:true
	}
	star = createSprite(450,30);
	star.addImage(starImg);
	star.scale = 0.4;
    

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(450 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(starBody.position.y>470){
  
  }

  drawSprites();

}

function keyPressed() {
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
 }
 
	 if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 20;
 }

 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(starBody,false); 
 }
}
