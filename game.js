diceArray = [
  {
    name:'dice1',
    image:'images/dice1.png'
  },
  {
    name:'dice2',
    image:'images/dice2.png'
  },
  {
    name:'dice3',
    image:'images/dice3.png'
  },
  {
    name:'dice4',
    image:'images/dice4.png'
  },
  {
    name:'dice5',
    image:'images/dice5.png'
  },
  {
    name:'dice6',
    image:'images/dice6.png'
  }
]
const resultDisplay = document.querySelector('#result')
var r1 = Math.floor(Math.random()*6)
var r2 = Math.floor(Math.random()*6)
var diceImage = document.querySelectorAll("img")
diceImage[0].setAttribute("src", diceArray[r1].image)
diceImage[1].setAttribute("src", diceArray[r2].image)

if (r1 > r2){
  resultDisplay.textContent = 'Player 1 won'
}
else if (r2 > r1) {
  resultDisplay.textContent = 'Player 2 won'
}
else{
  resultDisplay.textContent = "It's a Draw"
}
