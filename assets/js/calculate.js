class Calculate extends UI {
  compareChoice(value) {
    let comChoice = this.computerChoice(),
      userChoice = value;
    switch (userChoice + comChoice) {
      //if user win
      case "pr":
      case "rs":
      case "sp":
        // call won method in ui class
        this.won();
        break;
      case "ps":
      case "sr":
      case "rp":
        // call lose method in ui class
        this.lose();
    }
  }
  // select choice random
  computerChoice() {
    let choiceValues = ["p", "r", "s"],
      choice = Math.floor(Math.random() * 3);
    return choiceValues[choice];
  }
}
