//variables
let calculate = new Calculate(),
  ui = new UI(),
  paperDiv = document.querySelector("#paperDiv"),
  rockDiv = document.querySelector("#rockDiv"),
  scissorDiv = document.querySelector("#scissorDiv"),
  gameTitle = document.querySelector("#gameTitle");

//eventListeners
eventListeners();
function eventListeners() {
  //paper Div clicked
  paperDiv.addEventListener("click", () => {
    // forward paperDiv value
    calculate.compareChoice("p");
    //remove game title
    gameTitle.remove();
  });
  //rock Div clicked
  rockDiv.addEventListener("click", () => {
    // forward paperDiv value
    calculate.compareChoice("r");
    //remove game title
    gameTitle.remove();
  });
  //scissor Div clicked
  scissorDiv.addEventListener("click", () => {
    // forward paperDiv value
    calculate.compareChoice("s");
    //remove game title
    gameTitle.remove();
  });
}
