class UI {
  constructor() {
    this.userScore = 1;
    this.compScore = 1;
  }
  userWon() {
    let userScoreDiv = document.querySelector("#userScore");
    userScoreDiv.textContent = this.userScore++;
    console.log(userScoreDiv.textContent);
  }
  userLose() {
    let compScoreDiv = document.querySelector("#compScore");
    compScoreDiv.textContent = this.compScore++;
    console.log(compScoreDiv.textContent);
  }
  draw() {
    console.log("draw");
  }
}
