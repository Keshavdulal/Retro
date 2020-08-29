const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
let timeElem = document.querySelector("#time-left");
let scoreElem = document.querySelector("#score");

let userScore = 0;
let userRemainingTime = timeElem.textContent;
let targetSquare;

function randomlyPlaceMole() {
  purgeGrid();
  let randomlySelectedSquare = squares[Math.floor(Math.random() * 9)];
  randomlySelectedSquare.classList.add("mole");
  targetSquare = randomlySelectedSquare.id;
}

function purgeGrid() {
  squares.forEach((sq) => sq.classList.remove("mole"));
}

squares.forEach((sq) =>
  sq.addEventListener("click", () => {
    if (sq.id === targetSquare) {
      //   purgeGrid();
      console.log("Mole Whacked");
      userScore += 1;
      scoreElem.textContent = userScore;
      shiftMole();
    }
  })
);

function shiftMole() {
  let timerId = null;
  timerId = setInterval(randomlyPlaceMole, 1000);
}

shiftMole();

function countDown() {
  userRemainingTime--;
  timeElem.textContent = userRemainingTime;
  if (userRemainingTime === 0) {
    clearInterval(timerId);
    alert("Game Over!\n Your Score:" + userScore);
  }
}

let timerId = setInterval(countDown, 1000);
