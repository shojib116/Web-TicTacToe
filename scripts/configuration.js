function openPlayerConfig(event) {
    if (gameOngoing) {
        alert('You can\'t change player name during the game');
        return;
    }
    playerConfigModalElement.style.display = 'block';
    backDropElement.style.display = 'block';
    editedPlayer = event.target.dataset.playerid;
}

function closePlayerConfig() {
    playerConfigModalElement.style.display = 'none';
    backDropElement.style.display = 'none';
    nameValidationWarningElement.style.display = 'none';
    nameInputElement.style.backgroundColor = 'antiquewhite';
    nameInputElement.value = '';
}

function savePlayerName(event) {
    event.preventDefault();
    const playerName = nameInputElement.value.trim();

    if(!playerName) {
        nameValidationWarningElement.style.display = 'block';
        nameInputElement.style.backgroundColor = 'rgb(230, 160, 160)';
        return;
    }

    playerInfo[editedPlayer-1].name = playerName;
    const playerNameElement = document.getElementById('player-'+ editedPlayer +'-name');
    const playerNameScoreElement = document.getElementById('player-'+ editedPlayer +'-name-score');
    playerNameElement.textContent = playerName;
    playerNameScoreElement.textContent = playerName;

    closePlayerConfig();
}