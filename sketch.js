var canvas;
var backgroundImage;
var circle;
var luis1, luis2_running, luis3_fin;

function preload(){
  backgroundImage = loadImage("./imagen/ciudad.jpg");

  luis2_running = loadAnimation("luis1", luis3_fin)

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  circle = createSprite(100,390,40,40);
  luis1 = createSprite(50,180,50,50);
  luis.add
}

function draw(){
  background(backgroundImage);
  drawSprites();
}