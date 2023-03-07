
var currentGame = new Game;

var gameHeader = document.getElementById('gameHeader');
var classicGameOption = document.getElementById('classic');
var complexGameOption = document.getElementById('complex');
var fighterDisplay = document.getElementById('imageBlock')
var results = document.getElementById('play');
var compWins = document.getElementById('compWins');
var humanWins = document.getElementById('humanWins');
var gamePlay = document.querySelectorAll('#imageBlock');
var resetButton = document.getElementById('resetBtn');
var starkillerBase = document.getElementById('starkillerBase');
var starkillerCaption = document.getElementById('starkillerCaption');
var totalResetButton = document.getElementById('fullReset');


// 
classicGameOption.addEventListener('click', selectClassic);
complexGameOption.addEventListener('click', selectComplex);
for(var i = 0; i < gamePlay.length; i++) {
    gamePlay[i].addEventListener('click', selectFighter);
    gamePlay[i].addEventListener('click', function() {setTimeout(prepNextRound, 2000)});
}
resetButton.addEventListener('click', showOptions);
totalResetButton.addEventListener('click', resetFullGame);


// Functions ------------>>
function hide(element) {
    element.classList.add('hidden');
}

function show(element) {
    element.classList.remove('hidden');
}

function selectClassic() {
    currentGame.selectGameSetup('classic');
    displayGame();
}

function selectComplex() {
    currentGame.selectGameSetup('complex');
    displayGame();
}

function displayGame() {
    encouragePlayer();
    gameHeader.innerText = 'Choose Your Fighter!';
    results.innerHTML = '';
    fighterDisplay.innerHTML = '';
    for(var i = 0; i < currentGame.fighters.length; i++) {
        fighterDisplay.innerHTML += `${imageCodes[currentGame.fighters[i]]}`;
    }
    hide(results);
    show(fighterDisplay);
    show(resetButton);
    hide(classicGameOption);
    hide(complexGameOption);
    hide(totalResetButton);
}

function selectFighter(event) {
    currentGame.human.takeTurn(event.target.id);
    currentGame.computer.takeTurn();
    currentGame.selectComputerFighter();
    showBattleMode();
}

function showBattleMode() {
    hide(resetButton);
    if(currentGame.currentWin === 'Person' || currentGame.currentWin === 'Computer') {
        gameHeader.innerText = `${currentGame.currentWin} has won!`;
    } else {
        gameHeader.innerText ='It\'s a draw!';
    }
    hide(fighterDisplay);
    show(results);
    addTokens(results);
}

function addTokens(results) {
    var compFighter = imageCodes[currentGame.computer.chosenFighter];
    var humanFighter = imageCodes[currentGame.human.chosenFighter];
    results.innerHTML = `<figure>${humanFighter}<figcaption id="humanFig" class="figcap hidden">${currentGame.human.token}</figcaption></figure><figure>${compFighter}<figcaption id="compFig" class="figcap hidden">${currentGame.computer.token}</figcaption></figure>`;
    showWinToken();
}

function showWinToken() {
    var humanFig = document.getElementById('humanFig');
    var compFig = document.getElementById('compFig');
    if(currentGame.currentWin === 'Person'){
        currentGame.moveBase();
        positionBase();
        show(humanFig);
        showWinCount();
    } else if(currentGame.currentWin === 'Computer'){
        currentGame.moveBase();
        positionBase();
        show(compFig);
        showWinCount();
    }
}

function positionBase() {
    if(currentGame.cometPosition <= 240 && currentGame.cometPosition >= -240) {
        starkillerBase.style['object-position'] = `${currentGame.cometPosition}px`;
    }
    encouragePlayer();
}

function encouragePlayer() {
    if(currentGame.gamesLeft > 0 && currentGame.gamesLeft < 6 && currentGame.currentWin) {
        starkillerCaption.innerText = `You can do it! ${currentGame.gamesLeft} more to go!`;
    } else if(currentGame.gamesLeft > 0 && currentGame.gamesLeft < 6 && !currentGame.currentWin) {
        starkillerCaption.innerText = 'Win 3 games to save the Galaxy!';
    } else if(currentGame.gamesLeft === 6) {
        starkillerCaption.innerText = 'Oh no...';
    } else if(currentGame.gamesLeft === 0) {
        starkillerCaption.innerText = 'Hooray!';
    }
}

function showWinCount() {
    if(currentGame.currentWin === 'Computer') {
    hide(compWins);
    void compWins.offsetWidth;
    show(compWins);
    compWins.innerText = `Wins: ${currentGame.computer.wins}`;
    } else {
    hide(humanWins);
    void humanWins.offsetWidth;
    show(humanWins);
    humanWins.innerText = `Wins: ${currentGame.human.wins}`;
    } 
}

function prepNextRound() {
    if(currentGame.basePosition === 240 || currentGame.basePosition === -240) {
        displayGalaxysFate();
        return;
    }
    show(resetButton);
    displayGame();
}

function displayGalaxysFate() {
    hide(results);
    hide(fighterDisplay);
    hide(resetButton);
    show(totalResetButton);
    starkillerCaption.innerText = '';
    if(currentGame.cometPosition === 240) {
        gameHeader.innerText = 'You saved the Galazy!!';
    } else if(currentGame.cometPosition === -240) {
        gameHeader.innerText = 'You failed the Galaxy...';
    }
}

function showOptions() {
    gameHeader.innerText = 'Choose Your Game!';
    show(classicGameOption);
    show(complexGameOption);
    hide(fighterDisplay);
    hide(resetButton);
    hide(totalResetButton);
}

function resetFullGame() {
    currentGame = new Game;
    gameHeader.innerText = 'Choose Your Game!';
    starkillerBase.style['object-position'] = '0px';
    starkillerCaption.innerText = 'Uh oh! Starkiller Base is moving!  Win games to save the Galaxy!';
    humanWins.innerText = 'Wins: 0';
    compWins.innerText = 'Wins: 0';
    show(classicGameOption);
    show(complexGameOption);
    hide(fighterDisplay);
    hide(resetButton);
    hide(totalResetButton);
    results.innerHTML = '';
    fighterDisplay.innerHTML = '';
}