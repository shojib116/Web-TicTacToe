function resetScore() {
    draw = 0;
    player1score = 0;
    player2score = 0;

}

function resetGameBoard() {
    gameOngoing = 1;
    gameOver = 0;
    spotsFilled = 0;
    for (listElement of gameBoardListElements) {
        listElement.textContent = '';
        listElement.classList.remove('disabled');
    }
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
        }
    }
    currentGameResultAreaElement.firstElementChild.innerHTML = 'You have won, <span id="winner-player">PLAYER NAME</span>!';
}

function switchPlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
    }
    else {
        currentPlayer = 1;
    }
    currentPlayerNameElement.textContent = playerInfo[currentPlayer-1].name;
}

function updateSessionScore() {
    drawScoreElement.textContent = draw;
    player1scoreElement.textContent = player1score;
    player2scoreElement.textContent = player2score;
}


function updateScoreData() {
    if (winnerId === 0) {
        draw++;
    } 
    else if (winnerId === 1) {
        player1score++;
    }
    else {
        player2score++;
    }
    updateSessionScore();
}


function announceWinner() {
    const winnerPlayerElement = document.getElementById('winner-player');
    currentGameResultAreaElement.style.display = 'block';
    if(winnerId > 0) {
        winnerPlayerElement.textContent = playerInfo[winnerId-1].name;
    }
    else {
        currentGameResultAreaElement.firstElementChild.textContent = 'It\'s a draw!!!';
    }
    for (listElement of gameBoardListElements) {
        listElement.classList.add('disabled');
    }
    gameOngoing = 0;
}


function startNewSession() {
    if (playerInfo[0].name === '' || playerInfo[1].name === '') {
        alert('Please enter player name to start playing');
        return;
    }
    currentSessionScoreAreaElement.style.display = 'block';
    currentGameResultAreaElement.style.display = 'none';
    gameBoardElement.style.display = 'block';
    
    resetScore();
    updateSessionScore();
    resetGameBoard();

    currentPlayer = Math.ceil(Math.random()*2);
    currentPlayerNameElement.textContent = playerInfo[currentPlayer-1].name;
}


function startNewGame() {
    currentGameResultAreaElement.style.display = 'none';
    resetGameBoard();
}


function selectField(event) {
    const selectedFieldElement = event.target;
    
    const selectedRow = selectedFieldElement.dataset.row;
    const selectedCol = selectedFieldElement.dataset.col;

    if (selectedFieldElement.tagName != 'LI' || gameData[selectedRow-1][selectedCol-1] != 0 || gameOver) {
        return;
    }

    selectedFieldElement.textContent = playerInfo[currentPlayer-1].symbol;
    spotsFilled++;

    gameData[selectedRow-1][selectedCol-1] = currentPlayer;
    
    selectedFieldElement.classList.add('disabled');

    if(spotsFilled > 4) {
        winnerId = winnerCheck();
        if (winnerId > -1) {
            gameOver = 1;
            updateScoreData();
            announceWinner();
            return;
        }
    }

    
    switchPlayer();
}


function winnerCheck() {

    //checking rows

    for(let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
            ) {
                return gameData[i][0];
            }
    }

    //checking columns

    for(let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]
            ) {
                return gameData[0][i];
            }
    }

    //top left to bottom right
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }

    //bottom left to top right
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];
    }

    if(spotsFilled === 9) {
        return 0;
    }

    return -1;
}