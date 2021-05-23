var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
console.log("13 "+playerCount);
var runners, runner1, runner2;
var groundImage;

function preload() {
    /*car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");*/
    groundImage = loadImage("images/ground.png");
    console.log("12"+playerCount);
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  console.log("9"+playerCount);
  game = new Game();
  console.log("10"+playerCount);
  game.getState();
  console.log("11"+playerCount);
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
      game.play();
  }
    if (gameState === 2) {
        game.end();
    }
}
