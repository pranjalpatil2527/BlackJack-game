
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Pranjal",
    chips: 143
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true;
    let firstCard = getRandom()
    let secondCard = getRandom()
    sum = firstCard + secondCard
    cards =  [firstCard, secondCard]
    renderGame()
}

function getRandom() {

    let randomNum = Math.floor(Math.random() * 13) + 1
    if(randomNum > 10) {
        return 10
    } else if(randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
   
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if(isAlive == true && hasBlackJack == false) {
        let card = getRandom()
    cards.push(card)
    sum += card
    renderGame()
    }
    
}
