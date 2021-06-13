
  var background1, redb, pinkb, greenb, blueb, bowb, arrowb;
var backgrounda, redba, pinkba, greenba, blueba, bowba, arrowba;
var score;
var arrGroup;



function preload() {
  //load your images here 
  backgrounda =
    loadImage("background0.png");

  redba =
    loadImage("red_balloon0.png");

  pinkba =
    loadImage("pink_balloon0.png");

  greenba =
    loadImage("green_balloon0.png");

  blueba =
    loadImage("blue_balloon0.png");

  bowba =
    loadImage("bow0.png");

  arrowba =
    loadImage("arrow0.png");

}

function setup() {


  //add code here
  score = 0;
  createCanvas(400, 400);
  background1 = createSprite(100, 100, 400, 400);
  background1.addImage("bg", backgrounda);
  background1.scale = 1.5;




  background1.x = background1.width / 2;
  bowb = createSprite(350, 200, 10, 10);
  bowb.addImage("bo", bowba);




  redbGroup = new Group();
  pinkbGroup = new Group();
  greenbGroup = new Group();
  bluebGroup = new Group();
  arrGroup = new Group();

  //createArrow();

}


function draw() {
  background("white");


  //add code here

  background1.velocityX = -3;

  if (keyDown("space")) {
   // arrowb.velocityX = -15;
  // arrowb.x = 320;
    createArrow();

  }

  

  

  if (background1.x < 110) {
    background1.x = background1.width / 2;
  }

  bowb.y = mouseY;
 // arrowb.y = mouseY;

  spawnBalloonsRed();
  spawnBalloonsBlue();
  spawnBalloonsGreen();
  spawnBalloonsPink();
  if (arrGroup.isTouching(redbGroup) && arrowb.x < 320) {

    arrowb.x = 320;
    arrowb.velocityX = 0;
    redbGroup.destroyEach();
    arrGroup.destroyEach();
    score = score + 1
    

  }
  if (arrGroup.isTouching(pinkbGroup) && arrowb.x < 320) {

    arrowb.x = 320;
    arrowb.velocityX = 0;
    pinkbGroup.destroyEach();
    arrGroup.destroyEach();
    score = score + 1
  }
  if (arrGroup.isTouching(greenbGroup) && arrowb.x < 320) {

    arrowb.x = 320;
    arrowb.velocityX = 0;
    greenbGroup.destroyEach();
    arrGroup.destroyEach();
    score = score + 1

  }
  if (arrGroup.isTouching(bluebGroup) && arrowb.x < 320) {

    arrowb.x = 320;
    arrowb.velocityX = 0;
    bluebGroup.destroyEach();
    arrGroup.destroyEach();
    score = score + 1
  }
  drawSprites();



  fill("red");
  textFont("Showcard Gothic");
  text("Score  " + score, 200, 30);

  
  /*arrowb[index-1].x=x
  arrowb[index-1].y=y

  if(index===balloon.index){
  camera.position.x=displayWidth/2
  camera.position.y=arrowb[index-1].y
  }*/

}

function spawnBalloonsRed() {

  if (frameCount % 80 ===0){
    redb = createSprite(200, 20, 20, 20);
    redb.scale = 0.075;
    redb.velocityX = 3;
    redb.y = Math.round(random(375, 25));
    redb.lifetime = 280;
    redbGroup.add(redb);
   // redb.depth = arrowb.depth;
   // arrowb.depth = arrowb.depth + 1;



  }
}

function spawnBalloonsPink() {
  if (frameCount % 80 === 0) {
    pinkb = createSprite(300, 20, 20, 20);
   
    pinkb.addImage("p", pinkba);
    pinkb.velocityX = 4;
    pinkb.y = Math.round(random(375, 25));
    pinkb.lifetime = 320;
    pinkbGroup.add(pinkb);
    //pinkb.depth = arrowb.depth;
    //arrowb.depth = arrowb.depth + 1;


  }
}

function spawnBalloonsGreen() {

  if (frameCount % 80 === 0) {

    greenb = createSprite(350, 20, 20, 20);
   
    greenb.addImage("g", greenba);
    greenb.scale = 0.075;
    greenb.velocityX = 5;
    greenb.lifetime = 240;
    greenbGroup.add(greenb);
   // greenb.depth = arrowb.depth;
   // arrowb.depth = arrowb.depth + 1;


  }
}

function spawnBalloonsBlue() {

  if (frameCount % 80 === 0) {
    blueb = createSprite(250, 20, 20, 20);
    blueb.addImage("b", blueba);
    blueb.scale = 0.075;
    blueb.velocityX = 6;
    blueb.y = Math.round(random(375, 25));
    blueb.lifetime = 200;
    bluebGroup.add(blueb);
    //blueb.depth = arrowb.depth;
  //  arrowb.depth = arrowb.depth + 1;
  camera.position.x = displayWidth/2;
  camera.position.y=blueb.y;
  }


}

function createArrow() {
  arrowb = createSprite(320, 20, 20, 20);
  arrowb.addImage("dd", arrowba);
  arrGroup.add(arrowb);
  arrowb.y=bowb.y;
  arrowb.velocityX=-15;
  arrowb.scale = 0.3;
  

} 


  
  