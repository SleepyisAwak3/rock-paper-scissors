class Player {
  constructor() {
     this.name;
     this.token; // icon by the name
     this.wins = 0;
     this.chosenFighter; 
  }
  takeTurn(event) {
      if((currentGame.selectedGame === "classic" || currentGame.selectedGame === "complex") && this.name === "The Mandalorian") {
          this.chosenFighter = parseInt(event.target.id);
      } else if(currentGame.selectedGame === "classic" && this.name === "The Empire") {
          this.getRandomFighter();
      } else if(currentGame.selectedGame === "complex" && this.name === "The Empire") {
          this.getRandomFighter();
      }
  }
  getRandomFighter() {
      this.chosenFighter = currentGame.fighters[Math.floor(Math.random() * currentGame.fighters.length)];
  }
}