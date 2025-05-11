const button = document.querySelectorAll(".button");
const output = document.querySelector(".output");
const operator = document.querySelectorAll(".operator");
const firstNumber = document.querySelectorAll(".number");
const equal = document.querySelector(".equals");
const total = document.querySelector(".total");
const clear = document.querySelector(".ac");
const operators = ["/", "*", "-", "+"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const negativePositive = document.querySelector(".negative");
let negative = "-";
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

function round(input) {
  return Math.floor(input * 100) / 100;
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
      first = second;
      second = "";
      solution = "";
      operation = "";
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

negativePositive.addEventListener("click", () => {
  if (first && operation && second === "") {
    let tempFirst = first;
    first = "";
    first += "-" + tempFirst;
    output.textContent = `${first} ${operation}`;
  } else if (first && second === "") {
    let tempFirst = first;
    first = "";
    first += "-" + tempFirst;
    output.textContent = first;
  } else if (first && second) {
    let tempSecond = second;
    second = "";
    second += "-" + tempSecond;
    output.textContent = `${first} ${operation} ${second}`;
  } else {
    clearAll();
    output.textContent = "Calculate";
  }
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
      solution = round(subSolution);
      return solution;
    }
  } else if (operator === "-") {
    return subtract(array);

    function subtract(array) {
      let subSolution = array.reduce(
        (total, current) => total - Number(current)
      );
      solution = round(subSolution);
      return solution;
    }
  } else if (operator === "*") {
    return multiply(array);
    function multiply(array) {
      let subSolution = array.reduce(
        (total, current) => total * Number(current)
      );
      solution = round(subSolution);
      return solution;
    }
  } else if (operator === "/") {
    return divide(array);
    function divide(array) {
      let subSolution = array.reduce(
        (total, current) => total / Number(current)
      );
      solution = round(subSolution);
      return solution;
    }
  }
}
