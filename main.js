var currentGame = new Game;

var gameHeader = document.querySelector("#game-choice");
var fighterHeader = document.querySelector("#fighter-choice");
var drawHeader = document.querySelector("#draw");
var humanWinHeader = document.querySelector("#human-win");
var compWinHeader = document.querySelector("#comp-win");
var classicGameOption = document.querySelector("#classic");
var complexGameOption = document.querySelector("#complex");
var classicGamePlay = document.querySelector("#classicView");
var complexGamePlay = document.querySelector("#complexView");

classicGameOption.addEventListener("click", showClassicGame);
complexGameOption.addEventListener("click", showComplexGame);
classicGamePlay.addEventListener("click", function() {currentGame.selectClassicComputerFighter(event)})
complexGamePlay.addEventListener("click", function() {currentGame.selectComplexComputerFighter(event)})

function hide(element) {
    element.classList.add("hidden");
}

function show(element) {
    element.classList.remove("hidden");
}

function showClassicGame() {
    hide(gameHeader);
    hide(classicGameOption);
    hide(complexGameOption);
    show(classicGamePlay);
}

function showComplexGame() {
    hide(gameHeader);
    hide(classicGameOption);
    hide(complexGameOption);
    show(complexGamePlay);
}