const playerInfo = [
    {
        name : '',    
        symbol: 'X'
    },
    {
        name : '',    
        symbol: 'O'
    }
];

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let editedPlayer = 0;
let draw = 0;
let player1score = 0;
let player2score = 0;
let currentPlayer = 0;
let winnerId = 0;
let gameOver = 0;
let spotsFilled = 0;
let gameOngoing = 0;

const playerConfigModalElement = document.getElementById('player-config-overlay');
const backDropElement = document.getElementById('backdrop');
const nameInputElement = document.getElementById('player-name');
const nameValidationWarningElement = document.getElementById('validation-warning');
const currentSessionScoreAreaElement = document.getElementById('current-session-score');
const currentGameResultAreaElement = document.getElementById('current-game-result');
const gameBoardElement = document.getElementById('gameboard');
const drawScoreElement = document.getElementById('draw-score');
const player1scoreElement = document.getElementById('player-1-score');
const player2scoreElement = document.getElementById('player-2-score');
const gameAreaElement = gameBoardElement.lastElementChild;
const currentPlayerNameElement = document.getElementById('current-player-name');
const gameBoardListElements = document.querySelectorAll('#gameboard li');


//All the clickables
const editPlayer1NameBtn = document.getElementById('edit-player-1-name');
const editPlayer2NameBtn = document.getElementById('edit-player-2-name');
const playerNameSubmitCancelBtn = document.getElementById('cancel');
const playerNameSubmitBtn = document.getElementById('submit');
const startNewSessionBtn = document.getElementById('new-session-btn');
const startNewGameBtn = document.getElementById('new-game-btn');

// console.dir(editPlayer2NameBtn);
editPlayer1NameBtn.addEventListener('click', openPlayerConfig);
editPlayer2NameBtn.addEventListener('click', openPlayerConfig);

playerNameSubmitCancelBtn.addEventListener('click', closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);

playerNameSubmitBtn.addEventListener('click', savePlayerName);

startNewSessionBtn.addEventListener('click', startNewSession);

gameAreaElement.addEventListener('click', selectField);

startNewGameBtn.addEventListener('click', startNewGame);