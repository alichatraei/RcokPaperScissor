class Calculate extends UI {
  compareChoice(value) {
    let comChoice = this.computerChoice(),
      userChoice = value;
      console.log(userChoice + comChoice);
    switch (userChoice + comChoice) {
      //if user win
      case "pr":
      case "rs":
      case "sp":
        // call won method in ui class
        this.userWon();
        break;
      case "ps":
      case "sr":
      case "rp":
        // call lose method in ui class
        this.userLose();
        break;
      default:
        // call draw method in ui class
        this.draw();
        break;
    }
  }
  // select choice random
  computerChoice() {
    let choiceValues = ["p", "r", "s"],
      choice = Math.floor(Math.random() * 3);
    return choiceValues[choice];
  }
}
