var CardMatchGame = function(elem) {

	var cards = ['heart','heart','heart','heart','spade','spade','spade','spade','diamond','diamond','diamond','diamond','club','club','club','club'];
  var selectedCards = [];
  var table = this;
  // var matched [];


	this.shuffle = function(array) {
  	var currentIndex = array.length, temporaryValue, randomIndex ;

  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
   // console.log(shuffle);
};
		this.checkMatch = function(flippedCards){
          //var flippedCards = document.getElementsByClassName('flipped');
    
          if (flippedCards[0].dataset.suit === flippedCards[1].dataset.suit){
            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
            }
            else {
             setTimeout(function(){
              flippedCards[0].classList.toggle("flipped");
              flippedCards[1].classList.toggle("flipped");
              },400);
              console.log(flippedCards,"suitsdontmatch");

            }
          };

    this.matched = function(){
      if (flippedCards[0].length === 16);
       title.innerHTML = '<h1 id="title">Your win</h1>';
    }
		
    this.displayCards = function(){
			 cards.forEach(function(suit){
			 	var div = document.createElement('div');
			 	div.classList.add('card');
        //div.classList.add('card flipped');
        div.innerHTML = '<div class="front"></div><div class="back"><div class="suit '+suit+'"></div></div>';
        div.dataset.suit = suit;
        table.appendChild(div);
        div.addEventListener('mousedown',function(){
          div.classList.toggle('flipped');

        });
        //onMouseDown
		 });

  };
	

  this.init = function() {

  	this.shuffle(cards);
  	this.displayCards();
    //console.log('Card matching game is online.');

  };


  this.init();

};

CardMatchGame.call(document.getElementById('table'), document.getElementById('container'));