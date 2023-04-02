let gameBoard = ['', '', '', '', '', '', '', '', ''];

const cells = document.querySelectorAll(".cell");

const restartBtn = document.getElementById("restart");
const resetBtn = document.getElementById("reset");
restartBtn.addEventListener("click", RestartGame);
resetBtn.addEventListener("click", ResetScore);

var p1Score = document.getElementById("player1Score");
var p2Score = document.getElementById("player2Score");

const gameStatus = document.getElementById("status");




var player = 1;

cells.forEach(cell => {
    
    cell.addEventListener("click", function(cell){



        if(player == 1){
            cell.target.style.pointerEvents = 'none';
            gameStatus.innerText = "Player " + player + " Turn"
            CreateCell(cell.target, "X");
            player = 2; 
        }else{
            cell.target.style.pointerEvents = 'none';
            gameStatus.innerText = "Player " + player + " Turn"
            CreateCell(cell.target, "O");
            player = 1;
        }
    })

});



function gameOver() {
    if (
        (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') ||
        (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') ||
        (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') ||
        (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') ||
        (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') ||
        (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') ||
        (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') ||
        (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') 
    ){
        return player
    }

    if(gameBoard.every(element => element !== "")){
        return 3;
    }

    else return 0

}



function CreateCell(cell, value){

    var newElem = document.createElement("div")
    cell.appendChild(newElem)
    var cellID = cell.getAttribute("id")

    if(value === "X"){
        newElem.classList.add("cellX");
        UpdateBoard(cellID, "X")
        setTimeout(() => {
            newElem.style.backgroundImage = "url('/Images/X-Image.gif')";
        }, 1500);
    }else if(value === "O"){
        newElem.classList.add("cellO");
        UpdateBoard(cellID, "O")
        setTimeout(() => {
            newElem.style.backgroundImage = "url('/Images/O-Image.gif')";
        }, 1000);
    }
    
}


function RestartGame(){

    player = 1;
    gameStatus.innerText = "Player 1 Turn"
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.style.pointerEvents = "";
        if(cell.childNodes.length !=0){
            cell.removeChild(cell.childNodes[0]);
        }
    });

}


function ResetScore(){
    RestartGame();
    p1Score.innerText = 0;
    p2Score.innerText = 0;
}

function UpdateScore(winner){
    if(winner == 1){
        p1Score.innerText = Number.parseInt(p1Score.innerText) + 1;
    }else{
        p2Score.innerText = Number.parseInt(p2Score.innerText) + 1;
    }

}


function UpdateBoard(cellID, value){
    gameBoard[cellID] = value

    if(gameOver() === 1){
        UpdateScore(1)
        cells.forEach(cell => {
            gameStatus.innerText = "Player " + player + " Wins" 
            cell.style.pointerEvents = 'none';
            
        });
    }else if(gameOver() === 2){
        UpdateScore(2)
        cells.forEach(cell => {
            gameStatus.innerText = "Player " + player + " Wins" 
            cell.style.pointerEvents = 'none';

        });
    }else if(gameOver() === 3){
        gameStatus.innerText = "Draw" 

    }

    
}

