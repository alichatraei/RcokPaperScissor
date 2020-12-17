class Calculate extends UI {
  compareChoice(value, target) {
    let compChoice = this.computerChoice(),
      userChoice = value;
    console.log(userChoice + compChoice);
    switch (userChoice + compChoice) {
      //if user win
      case "pr":
      case "rs":
      case "sp":
        // call won method in ui class
        this.userWon(target);
        //show Status of the User & Computer choice
        this.textStatus(userChoice, compChoice, "برنده شدید :)");
        break;
      case "ps":
      case "sr":
      case "rp":
        // call lose method in ui class
        this.userLose(target);
        //show Status of the User & Computer choice
        this.textStatus(userChoice, compChoice, "باختید :|");
        break;
      default:
        //show Status of the User & Computer choice
        this.textStatus(userChoice, compChoice, "مساوی شدید :/");
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
