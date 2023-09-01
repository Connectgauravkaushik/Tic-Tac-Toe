let gridCells = document.querySelectorAll(".container > *");
let reset = document.getElementById("reset");
let NextPlayerMsg = document.getElementById("Next-player");
var gameOver = false;
var nextplayer = 'X';

var CellStates = [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " "
];
var WinningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8]
];

function SetNextPlayer() {
    nextplayer = (nextplayer === 'X') ? 'X' : 'O';
    NextPlayerMsg.textContent = nextplayer;
}

function ResetGame() {
    gameOver = false
    nextplayer = 'X'
    CellStates = [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " "
    ]
    gridCells.forEach(function (gridCell) {
        gridCell.style.backgroundColor = "white";
    })
    NextPlayerMsg.textContent = nextplayer;

}
reset.addEventListener('click', ResetGame);

function isGameover() {

    for (let i = 0; i < WinningStates.length; i++) {
        var winningState = WinningStates[i];

        if (CellStates[winningState[0]] != '' &&
            CellStates[winningState[0]] === CellStates[winningState[1]] &&
            CellStates[winningState[1]] === CellStates[winningState[2]]) {
            alert(" congratulation Game Over!! ");
            gameOver = true;
            return true;
        }
    }
    
}


gridCells.forEach(function (gridCell) {

    gridCell.addEventListener("click", function () {
        var index = gridCell.getAttribute("data-index");


        if (gameOver) {
            alert("This Game is Over , start is again ");
            return;
        }
        if (cellStates[index] != '') {
            alert("The cell has already been filled ");
            return;
        }
        if (nextplayer === 'X') {
            gridCell.style.backgroundColor = "green";
        }
        if (nextplayer === 'O') {
            gridCell.style.backgroundColor = "Lightgreen";
        }

        gridCell.textContent = nextplayer;
        cellStates[index] = nextplayer;
        SetNextPlayer(index);
        isGameOver();
    });

})











