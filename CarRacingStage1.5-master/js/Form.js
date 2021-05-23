class Form {

  constructor() {
    this.button = createButton('Play');
    this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Running Game");
    this.title.position(displayWidth/2 - 50, 0);

    
      this.button.position(displayWidth / 2 + 30, displayHeight / 2);
      this.reset.position(displayWidth-75, 25, 10, 100);

    this.button.mousePressed(()=>{

      this.button.hide();
      //player.name = this.input.value();
      console.log("1"+playerCount);
      playerCount+=1;
      console.log("2"+playerCount);
      if(playerCount===1){
        player.name="player1";
      }else{
        player.name="player2";
      }
      player.index = playerCount;
      console.log("3"+playerCount);
      player.update();
      console.log("4"+playerCount);
      player.updateCount(playerCount);
      console.log("5"+playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

      this.reset.mousePressed(() => {
          game.update(0);
          player.updateCount(0);
        //  Player.updateWinner(0);
      });

      
  }
}
