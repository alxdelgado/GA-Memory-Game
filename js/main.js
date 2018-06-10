console.log("Up and running!");

var cards = [
//object 001
{

rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",

},

//object 002
{

rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",

},

//object 003
{

rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",

},

//object 004
{

rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",

}
];


var cardsInPlay = [];


var checkForMatch = function () {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		
		alert("You found a match!");
	} 
	
	else {
		alert("Sorry try again.");
	}
};

if (cardsInPlay.length === 2) {
}

var flipCard = function (cardId) {
	
	cardsInPlay.push(cards[cardId].rank);
	
	console.log("User flipped" + cards[cardId].rank);

	checkForMatch();

	console.log(cardImage);
	console.log(suit);

};


flipCard(0);
flipCard(2);



