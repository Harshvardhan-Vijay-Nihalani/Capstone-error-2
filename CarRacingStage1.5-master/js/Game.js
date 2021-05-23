class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });
console.log("gamestate updated " + gameState);
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    console.log("8"+playerCount);
    if(gameState === 0){
      player = new Player();
      console.log("6"+playerCount);
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        console.log("7"+playerCount);
      }
      form = new Form()
      form.display();
    }

      runner1 = createSprite(400, 200);
    
      runner2 = createSprite(650, 200);

    runners = [runner1, runner2];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    //access database to read gamestate
//this.getState();
//console.log(gameState);
    //get the winner
     // player.getWinner();
    if(allPlayers !== undefined && gameState!==2){
      //var display_position = 100;
      // background image once all players have joined
        background(groundImage);

        //adding the image on the canvas
        //image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5);
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 200;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 250;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        console.log(runners);
        runners[index-1].x = x;
        runners[index-1].y = y;

        if (index === player.index){
         runners[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
            camera.position.y = runners[index - 1].y
           // cars[index - 1].debug = true;
            fill("blue");
            ellipse(runners[index - 1].x, runners[index - 1].y, 70, 120);
            
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 10;
      player.update();
    }
      if (player.distance > 1000) {
          gameState = 2;
          
          game.update(2);
      }

     
    drawSprites();
  }
    end() {
        console.log("game is over");
    }
}
