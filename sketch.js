var dog,sadDog,happyDog;
var button1,button2;
var food,foods;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(displayWidth/2,displayHeight/2);
  
  food = new Food();
  foods = 0;

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  button1 = createButton("Feed Dog");
  button2 = createButton("Add Food");

  button1.position(displayWidth/2-50,10);
  button2.position(displayWidth/2+50,10);
  
  button1.mousePressed(loseFood());
  button2.mousePressed(addFood());

}

function draw() {
  background(46,139,87);

  food.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function loseFood(){
  food.deductFood();
}

//function to add food in stock
function addFood(){
  foods += 1;
  food.updateFoodStock(foods);
}