const [input1, input2] = document.querySelectorAll("input[type=number]");
const operator = Array.from(document.querySelectorAll(".row > button"));
const reset = document.querySelector(".input > button");
const board = document.querySelector(".result");

operator.forEach(el => {
  el.addEventListener('click', event => {
    let result;
    const val1 = parseInt(input1.value);
    const val2 = parseInt(input2.value);
    if(!val1 || !val2) return;
    switch(event.target.value) {
      case "+" :
        result = val1 + val2;
        break;
      case "-" :
        result = val1 - val2;
        break;
      case "*" :
        result = val1 * val2;
        break;
      case "/" :
        result = val1 / val2;
    }
    board.innerHTML = result;
    input1.value = "";
    input2.value = "";
  });
});

reset.addEventListener('click', () => {
  input1.value = "";
  input2.value = "";
  board.innerHTML = "";
});