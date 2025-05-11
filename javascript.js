const button = document.querySelectorAll(".button");
const output = document.querySelector(".output");
const operator = document.querySelectorAll(".operator");
const firstNumber = document.querySelectorAll(".number");
const equal = document.querySelector(".equals");
const total = document.querySelector(".total");
const clear = document.querySelector(".clear");
const operators = ["/", "*", "-", "+"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let first = "";
let operation = "";
let second = "";
let solution = "";
let errorMessage = "";


function clearAll() {
  first = "";
  operation = "";
  second = "";
  errorMessage = "";
}

button.forEach((element) => {
  element.addEventListener("click", () => {
    if (solution) {
      first = solution;
      total.classList.add("hidden");
    }
    if (!operation && numbers.includes(element.id) && solution === "") {
      first += element.id;
      console.log(` 1st: ${first}`);
    } else if (first && numbers.includes(element.id)) {
      second += element.id;
      console.log(` 2nd: ${second}`);
    }
    if (solution && !operation && second) {
      errorMessage = "Error";
      console.log("error");
    }
    if (operators.includes(element.id) && first && second) {
    } else if (operators.includes(element.id) && first) {
      operation = element.id;
      console.log(` Opp: ${operation}`);
    }
    if (errorMessage === "") {
      output.textContent = `${first} ${operation} ${second}`;
    } else {
      output.textContent = errorMessage;
    }
  });
});

equal.addEventListener("click", () => {
  if (first && second && operation) {
    solution = operations(first, operation, second);
    total.classList.remove("hidden");
    total.textContent = `${solution}`;
    clearAll();
  }
});

clear.addEventListener("click", () => {
  total.classList.add("hidden");
  output.textContent = "Calculate";
  clearAll();
  solution = "";
});

function operations(numberOne, operator, numberTwo) {
  let array = [numberOne, numberTwo];

  if (operator === "+") {
    return add(array);

    function add(array) {
      let subSolution = array.reduce(
        (total, current) => total + Number(current),
        0
      );
      let solution = Math.floor(subSolution * 100) / 100;
      console.log(`Sum of ${solution}`);
      return solution;
    }
  } else if (operator === "-") {
    return subtract(array);

    function subtract(array) {
      let subSolution = array.reduce(
        (total, current) => total - Number(current)
      );

      let solution = Math.floor(subSolution * 100) / 100;
      console.log(`Total of ${solution}`);
      return solution;
    }
  } else if (operator === "*") {
    return multiply(array);
    function multiply(array) {
      let subSolution = array.reduce(
        (total, current) => total * Number(current)
      );

      let solution = Math.floor(subSolution * 100) / 100;
      console.log(`Total of ${solution}`);
      return solution;
    }
  } else if (operator === "/") {
    return divide(array);
    function divide(array) {
      let subSolution = array.reduce(
        (total, current) => total / Number(current)
      );

      let solution = Math.floor(subSolution * 100) / 100;

      console.log(`Total of ${solution}`);
      return solution;
    }
  }
}
