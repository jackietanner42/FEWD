function twoCardsFaceUp(){
  return $(".up").length == 2;
}

function cardsMatch(){
  return $(".up:eq(0)").text() == $(".up:eq(1)").text();
}

function markCardsAsMatched(){
  $(".up").each(function(){
    $(this).addClass("matched").removeClass("up").off("click");
  });
}

function updateScore(player){
  var el = $(player).find(".noPairs");
  var p = Number(el.text());
  el.text(p+1);
}

function allCardsMatched(){
  return ($(".matched").length == 24)
}

function flipCardsBackOver(){
  setTimeout(function(){
    $(".up").each(function(){
      $(this).addClass("down").removeClass("up");
    });
  }, 1000);
}

function shuffle(cards){
  // Uses Fisherâ€“Yates shuffle
  // See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
  var i = cards.length, j, tempi, tempj;
  if ( i == 0 ) return false;
  while ( --i ) {
    j = Math.floor( Math.random() * ( i + 1 ) );
    tempi = cards[i];
    tempj = cards[j];
    cards[i] = tempj;
    cards[j] = tempi;
  }
  return cards;
}

function highlightCurrentPlayer(player){
  $("#playerInfo p").each(function(){
    if ($(this).hasClass("active")){
      $(this).removeClass("active");
    }
  });
  $(player).find("p").first().addClass("active");
}

function incrementTurns(player){
  var el = $(player).find(".noTurns");
  var t = Number(el.text());
  el.text(t+1);
}

function updateCurrentPlayer(player){
  currentPlayer = (currentPlayer.match(/1/))? "#player2" : "#player1"
}

function winner(){
  var playerOnePoints = Number($("#player1").find(".noPairs").text());
  var playerTwoPoints = Number($("#player2").find(".noPairs").text());
  if (playerOnePoints > playerTwoPoints){
    return "Player one won!";
  } else if (playerOnePoints < playerTwoPoints){
    return "Player two won!";
  } else {
    return "An honourable draw!";
  }
}

// Shuffle cards


// Main Loop
$('.card').on("click", function(){
  if ($(".up").length == 2){
    return false;
  }

  $(this).removeClass("down").addClass("up");

  if (twoCardsFaceUp()){
    incrementTurns(currentPlayer);
    if (cardsMatch()){
      markCardsAsMatched();
      updateScore(currentPlayer);
      if (allCardsMatched()){
        alert(winner());
      }
    }else{
      flipCardsBackOver();
      updateCurrentPlayer(currentPlayer);
      setTimeout(function(){highlightCurrentPlayer(currentPlayer)}, 1000);
    }
  }
});

$("#reset").click(function(){
  location.reload();
});

$(".card").each(function(){
  var num = $(this).data("face");
  $(this).text(num);
});

var currentPlayer = "#player1";
highlightCurrentPlayer(currentPlayer);
