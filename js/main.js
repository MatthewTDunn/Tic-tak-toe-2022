let currentTurn = 0;
// establish the arrays to handle positioning of placed ticz'n'tacz 
let board = [0,0,0,0,0,0,0,0,0]
let gameOver = false
let x = []
let o = []

// add the event listener for a click on a tile
document.getElementById('square1').addEventListener('click',() => {placeChoice(1)})
document.getElementById('square2').addEventListener('click',() => {placeChoice(2)})
document.getElementById('square3').addEventListener('click',() => {placeChoice(3)})
document.getElementById('square4').addEventListener('click',() => {placeChoice(4)})
document.getElementById('square5').addEventListener('click',() => {placeChoice(5)})
document.getElementById('square6').addEventListener('click',() => {placeChoice(6)})
document.getElementById('square7').addEventListener('click',() => {placeChoice(7)})
document.getElementById('square8').addEventListener('click',() => {placeChoice(8)})
document.getElementById('square9').addEventListener('click',() => {placeChoice(9)})


// function to handle placement of tiles

function placeChoice(choice){
  // if the game isn't over (set once three in a row is made)
  if (gameOver == false){
    // make sure that the tile they clicked on does not already have a tile in it
    if (o.includes(choice) == false && x.includes(choice) == false){
      // determine who's turn it is
        if (currentTurn%2==0){
          // increment turnorder, add the image and push this choice to the gameboard array
          document.getElementById(`square${choice}`).style.backgroundImage = "url('res/circle.png')"
          currentTurn++
          board[choice-1] = 1
          o.push(choice)
          document.getElementById('winnerText').innerText = "X's Turn"
        } else if (currentTurn%2==1){
          // increment turnorder, add the image and push this choice to the gameboard array
          document.getElementById(`square${choice}`).style.backgroundImage = "url('res/cross.png')"
          currentTurn++
          board[choice-1] = 2
          x.push(choice)
          document.getElementById('winnerText').innerText = "O 's Turn"
        } 
      } else {
      alert('you have already placed a tile here')
      }
    console.log(currentTurn)
    console.log(board)
    // check to see if someone has won
    checkWin(0,1,2)
    checkWin(3,4,5)
    checkWin(6,7,8)
    checkWin(0,3,6)
    checkWin(1,4,7)
    checkWin(2,5,8)
    checkWin(0,4,8)
    checkWin(2,4,6)
    
  }
}

function checkWin(positionA,positionB,positionC){
  // check TOP HORIZONTAL
  if (board[positionA] != 0 && board[positionA] == board[positionB] && board[positionB] == board[positionC]){
    document.getElementById('winnerText').innerText = 'Congratulations, we have a winner!'
    document.getElementById('subText').innerText = 'Refresh the page to start again'
    gameOver = true;
    
  }
 
  if (currentTurn == 9){
    document.getElementById('winnerText').innerText = 'No Winner, Game Resulted in Stalemate!'
    document.getElementById('subText').innerText = 'Refresh the page to start again'
  }
}