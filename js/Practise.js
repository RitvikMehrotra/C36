function play()
form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

if (players!==undefined){
    var display_position = 130;
    for(var plr in allPlayers){
      if (plr === "player" + player.index)
        fill("red")
      else
        fill("black");

  
    }
}


if(keyisdown=(UP_ARROW)&& player.index !== null){
    player.distance +=50
    player.update();
  }

{

}

