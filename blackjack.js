let player = {
    name : "mohammed",
    chips : 200
}

let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chips + " points"

function getrandomcard (){
    let randomnum = Math.floor(Math.random() * 13) + 1
    
    if (randomnum > 10){
        return 10
    } else if (randomnum === 1){
        return 11
    } else {
        return randomnum
    }   
}

function start(){
    isalive = true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    render()
}

function render(){
cardsEl.textContent = "cards: "

for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
}

if (sum < 21){
    message = "do you want to draw a new card"
} else if (sum === 21){
    message = "you've got blackjack!"
    hasblackjack = true
} else {
    message = "you are out of the game"
    isalive = false
}
messageEl.textContent = message
sumEl.textContent = "sum: "+sum
}

function newcard(){
    if ( isalive === true && hasblackjack === false) {
        let thirdcard = getrandomcard()
    sum += thirdcard
    cards.push(thirdcard)
    console.log(cards)
    render()
    }   
}
