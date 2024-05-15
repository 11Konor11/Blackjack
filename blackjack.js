const textField = document.querySelector("#text-field")
const startGame = document.querySelector("#start-game")
const newCard = document.querySelector("#draw-new-card")
const playerCards = document.querySelector("#player-cards")
const dealerCards = document.querySelector("#dealer-cards")
const dealerButton = document.querySelector("#draw-dealer-cards")
const playerSum = document.querySelector("#player-sum")
const dealerSum = document.querySelector("#dealer-sum")
const winner = document.querySelector("#winner")
const winCount = document.querySelector("#win-count")
let wins = 0
let startGameStatus = false
let dealerButtonActive = false
let playerCardSum = 0
let dealerCardSum = 0
let isAlive = true

startGame.addEventListener("click", function(){
	playerCardSum = 0
	startGameStatus = true
	playerCards.innerText = `Your cards:`
	playerSum.innerText = `Sum:`
	for(i=0;i<2;i++){
		let rand = Math.floor( (Math.random() * 10 ) + 2)
		playerCardSum += rand
		playerCards.innerText += ` ${rand}` 	
	}
	playerSum.innerText += playerCardSum
})

newCard.addEventListener("click", function(){
	if(startGameStatus == true){
		if(isAlive == true){
			let rand = Math.floor( (Math.random() * 10 ) + 2)
			playerCardSum += rand
			playerSum.innerText = `Sum:`
			playerSum.innerText += playerCardSum
			playerCards.innerText += ` ${rand}`
}			
}
	alive()
})

function alive(){
	if(playerCardSum == 21){
		isAlive = false
		playerSum.innerText = `${playerCardSum} Blackjack!`
	}else if(playerCardSum == 20){
		isAlive = false
		playerSum.innerText = `${playerCardSum} You can't draw more cards!`
	}else if(playerCardSum > 21){
		isAlive = false
		playerSum.innerText = `${playerCardSum}`
	}
}


dealerButton.addEventListener("click", function(){
	dealerButtonActive = true
	dealerCardSum = 0
	dealerCards.innerText = `Dealer cards:`
	dealerSum.innerText = `Sum:`
	if(startGameStatus == true){
		for(i=0;i<2;i++){
			let rand = Math.floor( (Math.random() * 10 ) + 2)
			dealerCardSum += rand
			dealerCards.innerText += ` ${rand}` 	
		}
		while(dealerCardSum < 15){
			
				let rand = Math.floor( (Math.random() * 10 ) + 2)
				dealerCardSum += rand
				dealerCards.innerText += ` ${rand}`
			}
	}
	dealerSum.innerText += dealerCardSum
	win()
})

function win(){
	winner.innerText = `Winner is:`
	winCount.innerText = ` Win counter: `
	if(playerCardSum > 21 && dealerCardSum < 21){
		winner.innerText += ` dealer`
	}else if(playerCardSum > 21 && dealerCardSum > 21){
		winner.innerText += ` draw!`
	}else if(playerCardSum == 21 && dealerCardSum != 21){
		winner.innerText += ` player(you)`
		wins++
	}else if(playerCardSum == dealerCardSum){
		winner.innerText += ` draw!`
	}else if(playerCardSum < 21 && playerCardSum > dealerCardSum){
		winner.innerText += ` player(you)`
		wins++
	}else if(dealerCardSum < 21 && dealerCardSum > playerCardSum){
		winner.innerText += ` dealer`
	}
	winCount.innerText += ` ${wins}`
}