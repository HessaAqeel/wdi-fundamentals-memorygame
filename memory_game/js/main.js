
console.log("Up and running!"); 


var cards = ["Queen", "Queen", "King","king"];

var cardsInPlay = [];

var checkForMatch = function(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

var flipCard = function(cardId){

	console.log("User flipped" + cards[0]);
	console.log("User flipped" + cards[3]);
	cardsInPlay.push(cards[0]); 

checkForMatch();
   
}
	
    flipCard(); 
	flipCard(0);
	flipCard(3);







