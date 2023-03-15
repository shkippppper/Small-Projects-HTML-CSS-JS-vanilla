let gameBoard = ['', '', '', '', '', '', '', '', ''];

const cells = document.querySelectorAll(".cell");

const restartBtn = document.getElementById("restart");
const resetBtn = document.getElementById("reset");
restartBtn.addEventListener("click", RestartGame);
resetBtn.addEventListener("click", ResetScore);

var p1Score = document.getElementById("player1Score");
var p2Score = document.getElementById("player2Score");





var player = 1;





cells.forEach(cell => {
    
    cell.addEventListener("click", function(cell){
        if(player == 1){
            cell.target.style.pointerEvents = 'none';
            CreateX(cell.target);
            player = 2; 
        }else{
            cell.target.style.pointerEvents = 'none';
            CreateO(cell.target);
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
    ) {
        return true
    }
    return false
}




function CreateX(cell){
    var newElem = document.createElement("div")
    newElem.classList.add("cellX");
    cell.appendChild(newElem)
    UpdateBoard()
}



function CreateO(cell){
    var newElem = document.createElement("div")
    newElem.classList.add("cellO");
    cell.appendChild(newElem)
    UpdateBoard()
}


function RestartGame(){
    player = 1;
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.style.pointerEvents = "";
        if(cell.childNodes.length !=0){
            cell.removeChild(cell.childNodes[0]);
        }
    });

}


function ResetScore(){
    console.log('ye')
    player = 1;
    p1Score.innerText = 0;
    p2Score.innerText = 0;

}

function UpdateScore(winner){
    if(winner == 1){
        p1Score.innerText +=1;
    }else{
        p2Score.innerText +=1;
    }

}


function UpdateBoard(){
    cells.forEach(function callback(value, index) {
        if(cells[index].childNodes.length !=0){
            gameBoard[index] = cells[index].innerHTML;
            console.log(gameBoard)
        }        

    });
}