var win = 0;
var lost = 0;
var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
]

var cardsInPlay = [];


var cardElement= null;

var game_board = document.getElementById('game_board');
function createBoard(){
    
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute("src","images/back.png");
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener("click",flipCard);
        game_board.appendChild(cardElement);
    }
}

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]){
        console.log("You found a match!")
        alert("You found a match!")
        userWin();
    }
    else{
        console.log("Sorry, try again.")
        alert("Sorry, try again.")
        userLost();
    }
}

function flipCard(){
    var cardId = this.getAttribute('data-id')
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank)
    console.log(cards[cardId].suit)
    console.log(cards[cardId].cardImage)
    
    this .setAttribute('src',cards[cardId].cardImage)
    
    if( cardsInPlay.length === 2){
        checkForMatch();
    }
}

let reset = document.querySelector(".reset").addEventListener("click", restart);
createBoard();

function restart(){
    if (game_board.parentNode) {
        // game_board.parentNode.removeChild(game_board);
        win = 0;
        lost = 0;
        document.querySelector("#userWin").innerText= win;
        document.querySelector("#userLost").innerText= lost ;
    }
}
function userWin(){
    win++;
    document.querySelector("#userWin").innerText= win;
}
function userLost(){
    lost++;
    document.querySelector("#userLost").innerText= lost ;
}

