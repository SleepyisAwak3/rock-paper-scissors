class Player {
  constructor(name, token) {
     this.name = name;
     this.token = token;
     this.wins = 0;
     this.chosenFighter; 
  }
  takeTurn(chosenImg) {
      if(this.name === 'The Mandalorian') {
          this.chosenFighter = parseInt(chosenImg);
      } else if(currentGame.selectedGame === 'classic' && this.name === 'The Empire') {
          this.getRandomFighter(0, 3);
      } else if(currentGame.selectedGame === 'complex' && this.name === 'The Empire') {
          this.getRandomFighter(3, 8);
      }
  }
  getRandomFighter(min, max) {
      this.chosenFighter = currentGame.fighters[Math.floor(Math.random() * (max - min))];
  }
}
