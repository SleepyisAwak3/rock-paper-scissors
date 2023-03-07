class Game {
  constructor() {
      this.human = new Player('The Mandalorian', '🛡️');
      this.computer = new Player('The Empire', '🚀');
      this.fighters = [];
      this.selectedGame;
      this.currentWin = '';
      this.basePosition = 0;
      this.gamesLeft;
  }
  selectGameSetup(type){
      this.human.name = "The Mandalorian"
      this.computer.name = "The Empire"
      this.selectedGame = type;
      if(this.selectedGame === 'classic') {
          this.fighters = [0, 1, 2];
      } else {
          this.fighters = [3, 4, 5, 6, 7];
      }
  }
  selectComputerFighter() {
      if(this.selectedGame === 'classic') {
          this.compareFightersClassic();
      } else {
          this.compareFightersComplex();
      }
  }
  compareFightersClassic() {
      var human = this.human.chosenFighter;
      var comp = this.computer.chosenFighter;
      if(human === 0 && comp === 1) {
          this.computer.wins++;
          this.currentWin = 'Computer';
      } else if(human === 0 && comp === 2) {
          this.human.wins++;
          this.currentWin = 'Person';
      }
      if(human === 1 && comp === 2) {
          this.computer.wins++;
          this.currentWin = 'Computer';
      } else if(human === 1 && comp === 0) {
          this.human.wins++;
          this.currentWin = 'Person';
      }
      if(human === 2 && comp === 0) {
          this.computer.wins++;
          this.currentWin = 'Computer';
      } else if(human === 2 && comp === 1) {
          this.human.wins++;
          this.currentWin = 'Person';
      }
      if(human === comp) {
          this.declareDraw();
      }
  }
  compareFightersComplex() {
      var human = this.human.chosenFighter;
      var comp = this.computer.chosenFighter;
      
      if(human === 3 && (comp === 4 || comp === 7)) {
          this.computer.wins++;
          this.currentWin = 'Computer';
      } else if(human === 3 && (comp === 5 || comp === 6)) {
          this.human.wins++;
          this.currentWin = 'Person';
      }
      if(human === 4 && (comp === 6 || comp === 7)) {
          this.computer.wins++;
          this.currentWin = 'Computer';
      } else if(human === 4 && (comp === 3 || comp === 5)) {
          this.human.wins++;
          this.currentWin = 'Person';
      }
      if(human === 5 && (comp === 3 || comp === 4)) {
          this.computer.wins++;
          this.currentWin = 'Computer';
      } else if(human === 5 && (comp === 6 || comp === 7)) {
          this.human.wins++;
          this.currentWin = 'Person';
      }
      if(human === 6 && (comp === 3 || comp === 5)) {
          this.computer.wins++;
          this.currentWin = 'Computer';
      } else if(human === 6 && (comp === 7 || comp === 4)) {
          this.human.wins++;
          this.currentWin = 'Person';
      }
      if(human === 7 && (comp === 5 || comp === 6)) {
          this.computer.wins++;
          this.currentWin = 'Computer';
      } else if(human === 7 && (comp === 4 || comp === 3)) {
          this.human.wins++;
          this.currentWin = 'Person';
      }
      if(human === comp) {
          this.declareDraw();
      }
  }
  declareDraw() {
      this.currentWin = 'Draw';
  }
  moveBase() {
      if(currentGame.currentWin === 'Person') {
          this.basePosition += 80;
      } else if(currentGame.currentWin === 'Computer'){
          this.basePosition -= 80;
      }
      this.gamesLeft = 3 - (this.human.wins - this.computer.wins);

  }
}