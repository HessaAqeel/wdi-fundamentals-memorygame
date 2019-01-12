
console.log("Up and running!"); 


var cards = [

{
	rank : 'queen', 
	suit : 'hearts', 
	cardImage : 'images/queen-of-hearts.png',
	



},

{
    rank : 'queen', 
	suit : 'diamonds', 
	cardImage : 'images/queen-of-diamonds.png',
     
},

{
	rank : 'king', 
	suit : 'hearts', 
	cardImage : 'images/king-of-hearts.png',
	

},

{
	rank : 'king', 
	suit : 'diamonds', 
	cardImage : 'images/king-of-diamonds.png',
  

}

];

    

var cardsInPlay = [];

var checkForMatch = function(){

this.setAttribute(cards['queen'].images/queen-of-hearts.png)
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

var flipCard = function(){

	this.getAttribute('data-id');
	console.log("User flipped" + cards[0].rank);
	console.log("User flipped" + cards[3].rank);
	cardsInPlay.push(cards[0].rank); 

	console.log('suit');
    console.log('cardImage');

checkForMatch();
   
}
    
	
    flipCard(); 
	



var createBoard = function(){

for (var i = 0; i < cards.length; i++) {

var createElement = document.createElement('img');

cardElement.setAttribute('img').src = "images/back.png";

cardElement.setAttribute('data-id', i);

addEventListener('click', flipCard);

appendChild(cardElement, "game-board");


}

createBoard();


