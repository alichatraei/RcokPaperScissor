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
