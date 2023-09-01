let gridCells = document.querySelectorAll(".container > *");
let reset = document.getElementById("reset");
var gameOver = false;
var nextplayer = 'X';

let NextPlayerMsg = document.getElementById("Next-player");
var cellStates = [
    '', '', '',
    '', '', '',
    '', '', ''
];

var winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8]

];

function ResetGame() {
    gameOver = false;
    nextplayer = 'X';
    cellStates = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    gridCells.forEach(function (gridCell) {
        gridCell.style.backgroundColor = "white";
        gridCell.textContent = '';
    })
    NextPlayerMsg.textContent = nextplayer;;
}
reset.addEventListener('click', ResetGame);

function setNextPlayer() {
    nextplayer = (nextplayer === 'X') ? 'O' : 'X';
    NextPlayerMsg.textContent = nextplayer;
}

function isGameOver() {
    for (let i = 0; i < winningStates.length; i++) {
        var winningState = winningStates[i];

        if (cellStates[winningState[0]] !== '' &&
            cellStates[winningState[0]] === cellStates[winningState[1]] &&
            cellStates[winningState[1]] === cellStates[winningState[2]]

        ) {
            alert(" congratulation Game Over!! ");
            gameOver = true;
            return true;
        }
    }
    return false;
}

gridCells.forEach(
    function (gridCell) {
        gridCell.addEventListener("click", function () {
            var index = gridCell.getAttribute("data-index") //   - grid cell attribute get the indexes of all the div cells 
            // gridCell.style.backgroundColor = "green";

            if (gameOver) {
                alert("This Game is Over , start is again ");
                return;
            }
            if (cellStates[index] != '') {
                alert("The cell has already been filled ");
                return;
            }

            if(nextplayer === 'X'){
                gridCell.style.backgroundColor = "green";
            }
            if(nextplayer === 'O'){
                 gridCell.style.backgroundColor = "Lightgreen";
            }

            gridCell.textContent = nextplayer;
            cellStates[index] = nextplayer;
            setNextPlayer(index);
            isGameOver();
        });
    }
)










