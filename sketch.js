var starImg,bgImg;
var star, starBody;
var hada,hadaImg,Voz;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	hadaImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	Voz=loadSound("sound/JoyMusic.mp3");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);
	Voz.playSound;
	//escribe el código para reproducir el sonido fairyVoice
      hada=createSprite(200,300);
      hada.addAnimation("hada2",hadaImg);
	  hada.scale=0.5;
	//crea el sprite del hada, y agrega la animación para el hada


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
if (star.y>470&&starBody.position.y>470){
	Matter.Body.setStatic(starBody,true);
}
  //escribe aquí el código para detener la estrella en la mano del hada

  drawSprites();

}

function keyPressed() {

	if (keyCode === "DOWN_ARROW") {
		Matter.Body.setStatic(starBody.false); 
	}
    if (keyCode===26){ 
		console.log("hola");
		hada.velocityX=50;
	}
	if (keyCode===27){
		hada.velocityX=-50;
	}
	//escribe el código para mover al hada a la izquierda y derecha
	
}
