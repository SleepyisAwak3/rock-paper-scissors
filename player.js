class Player {
  constructor() {
     this.name;
     this.token;
     this.wins = 0;
     this.chosenFighter; 
  }
  takeTurn(chosenImg) {
      if((currentGame.selectedGame === "classic" || currentGame.selectedGame === "complex") && this.name === "The Mandalorian") {
          this.token = "🛡️"
          this.chosenFighter = parseInt(chosenImg);
      } else if(currentGame.selectedGame === "classic" && this.name === "The Empire") {
          this.token = "🚀"
          this.getRandomFighter();
      } else if(currentGame.selectedGame === "complex" && this.name === "The Empire") {
          this.token = "🚀"
          this.getRandomFighter();
      }
  }
  getRandomFighter() {
      this.chosenFighter = currentGame.fighters[Math.floor(Math.random() * currentGame.fighters.length)];
  }
}