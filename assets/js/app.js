//variables
let calculate = new Calculate(),
  ui = new UI(),
  paperDiv = document.querySelector("#paperDiv"),
  rockDiv = document.querySelector("#rockDiv"),
  scissorDiv = document.querySelector("#scissorDiv");

//eventListeners
eventListeners();
function eventListeners() {
  //paper Div clicked
  paperDiv.addEventListener("click", () => {
    // forward paperDiv value
    calculate.compareChoice("p");
  });
  //rock Div clicked
  rockDiv.addEventListener("click", () => {
    calculate.compareChoice("r");
  });
  //scissor Div clicked
  scissorDiv.addEventListener("click", () => {
    calculate.compareChoice("s");
  });
}
