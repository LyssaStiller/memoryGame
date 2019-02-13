/*
 * Create a list that holds all of your cards
 */

const cardClasses = ["fa fa-diamond", "fa fa-paper-plane-o","fa fa-anchor", "fa fa-bolt","fa fa-cube", "fa fa-anchor", "fa fa-leaf",
"fa fa-bicycle","fa fa-diamond","fa fa-bomb","fa fa-leaf","fa fa-bomb","fa fa-bolt","fa fa-bicycle","fa fa-paper-plane-o","fa fa-cube"]



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length
    var temporaryValue;
    var randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

    /*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function displayCards(cardClasses) {
    var shuffledCards = shuffle(cardClasses);
    var deck = document.querySelector(".deck");
    var cardElem
    var cardLi

    for(var i=0; i<shuffledCards.length; i++){
        cardLi = document.createElement("li")
        cardLi.className = "card"
        cardI = document.createElement("i");
        cardI.className = shuffledCards[i];
        cardLi.appendChild(cardI);
        deck.appendChild(cardLi);
    }

}

displayCards(cardClasses);

var cards = document.getElementsByClassName("card")
var openCards = [];
var matchedCards = [];

function addToOpen(card) {

    // console.log("hi")

    if(!openCards.length){
        openCards.push(card)
    }
    else if(openCards.length = 1){
        openCards.push(card)
        if(openCards[1].firstChild.className === openCards[0].firstChild.className){
            matchedCards.push(openCards[0], openCards[1])
            setMatch()
        }
        else{
            removeFromOpen()
        }
    }

}

function setMatch(){
   matchedCards.forEach(function(card){
       card.classList.add("match");
       removeFromOpen();
       console.log("in theory,remove", openCards)

   })
//    console.log("matched", matchedCards)
}

function removeFromOpen(){
    console.log("before close", openCards)
    openCards.forEach(function(card){
        card.classList.remove("open", "show");
        openCards.shift()
    })
    console.log("after close", openCards)
}

function flipCard(card) {
    card.classList.add("open", "show");
    addToOpen(card);
}

for(var i=0; i < cards.length; i++){
    cards[i].addEventListener("click", function(e){
        if(e.target.classList.contains("card")){
            flipCard(e.target)
        }
    })
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)

 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
