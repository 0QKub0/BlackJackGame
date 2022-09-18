let player = {
    name : "Nick",
    chips : 125
}
let cards = []
let sum = 0
let message = "";
let messageEl = document.getElementById("messageEl");
let sumEl = document.getElementById("sumEl");
let cardsEl = document.getElementById("cardsEl");
let hasBlackJack = false;
let playerEl = document.getElementById("playerEl");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10){
        return 10;
    } else if(randomNumber === 1){
        return 11;
    } else{
        return randomNumber;
    }
}
function renderGame(){
    if(sum <= 20){
        message = "Do you want to draw a new card?";
        messageEl.textContent = message;
        sumEl.textContent = "Sum is: " + sum;
        cardsEl.textContent = "Your cards is: ";
        for(let i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + " ";
        }
    } else if (sum === 21){
        hasBlackJack = true;
        message = "YOU GOT BLACKJACK!"
        messageEl.textContent = message;
        sumEl.textContent = "Sum is: " + sum;
        cardsEl.textContent = "Your cards is: ";
        for(let i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + " ";
        }
    } else{
        message = "You're out of the game :("
        messageEl.textContent = message;
        sumEl.textContent = "Sum is: " + sum;
        cardsEl.textContent = "Your cards is: ";
        for(let i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + " ";
        }
        isAlive = false;
        }
}

function newCard(){
    if(hasBlackJack === false && isAlive === true){
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
} 
