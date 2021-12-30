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

let editedPlayer = 0;

const playerConfigModalElement = document.getElementById('player-config-overlay');
const backDropElement = document.getElementById('backdrop');
const nameInputElement = document.getElementById('player-name');
const nameValidationWarningElement = document.getElementById('validation-warning');


//All the clickables
const editPlayer1NameBtn = document.getElementById('edit-player-1-name');
const editPlayer2NameBtn = document.getElementById('edit-player-2-name');
const playerNameSubmitCancelBtn = document.getElementById('cancel');
const playerNameSubmitBtn = document.getElementById('submit');
const startNewSessionBtn = document.getElementById('new-session-btn');

// console.dir(editPlayer2NameBtn);
editPlayer1NameBtn.addEventListener('click', openPlayerConfig);
editPlayer2NameBtn.addEventListener('click', openPlayerConfig);

playerNameSubmitCancelBtn.addEventListener('click', closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);

playerNameSubmitBtn.addEventListener('click', savePlayerName);