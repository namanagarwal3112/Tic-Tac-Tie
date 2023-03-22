let turn = "X";
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
  });
});
