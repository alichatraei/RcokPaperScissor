class UI {
  constructor() {
    this.userScore = 1;
    this.compScore = 1;
  }
  //win user function
  userWon(target) {
    let userScoreDiv = document.querySelector("#userScore");
    userScoreDiv.textContent = this.userScore++;
    //change target style when user or computer won the set
    target.setAttribute("style", "border: solid 0.3rem green;");
    //set time out in 3000ms remove border style
    setTimeout(() => {
      target.setAttribute("style", "border: solid 0.3rem #ff4141;");
    }, 3000);
  }
  //lose user function
  userLose(target) {
    let compScoreDiv = document.querySelector("#compScore");
    compScoreDiv.textContent = this.compScore++;
    target.setAttribute("style", "border: solid 0.3rem red;");
    //set time out in 3000ms remove border style
    setTimeout(() => {
      target.setAttribute("style", "border: solid 0.3rem #ff4141;");
    }, 3000);
  }
  //change set of the game text status
  textStatus(user, comp, spanValue) {
    let textStatus = document.querySelector("#gameStatus");
    //convert user & computer choice to text
    let userValue = "",
      compValue = "";
    switch (user) {
      case "r":
        userValue = "سنگ";
        break;
      case "p":
        userValue = "کاغذ";
        break;
      case "s":
        userValue = "قیچی";
    }
    switch (comp) {
      case "r":
        compValue = "سنگ";
        break;
      case "p":
        compValue = "کاغذ";
        break;
      case "s":
        compValue = "قیچی";
    }
    textStatus.innerHTML = `انتخاب شما ${userValue} و انتخاب سیستم ${compValue}، پس شما <span class="text-danger">${spanValue}</span>`;
  }
}
