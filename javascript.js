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
const percentage = document.querySelector(".percentage");
const period = document.querySelector(".period");
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
  if (parseInt(first) > 0) {
    if (solution) {
      let tempSolution = solution;
      solution = "";
      solution += "-" + tempSolution;
      output.textContent = solution;
    } else if (first && operation && second === "" && solution === "") {
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
      second = second.startsWith("-") ? second.slice(1) : "-" + second;
      output.textContent = `${first} ${operation} ${second}`;
    } else {
      clearAll();
      output.textContent = "Calculate";
    }
  } else {
    if (solution) {
      solution = String(solution).slice(1);
      output.textContent = solution;
    } else if (first && operation && second === "" && solution === "") {
      first = String(first).slice(1);
      output.textContent = `${first} ${operation}`;
    } else if (first && second === "") {
      first = String(first).slice(1);
      output.textContent = first;
    } else {
      clearAll();
      output.textContent = "Calculate";
    }
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

operator.forEach((element) => {
  element.addEventListener("click", (element) => {
    if (first === "" && solution === "") {
      clearAll();
      output.textContent = "Calculate";
    }
  });
});

period.addEventListener("click", () => {
  if (solution) {
    // solution = solution + ".";
    solution = solution.includes(".") ? solution : solution + ".";
    output.textContent = solution;
  } else if (first && second) {
    // second = second + ".";
    second = second.includes(".") ? second : second + ".";
    output.textContent = `${first} ${operation} ${second}`;
  } else if (first && operation === "" && second === "") {
    // first = first + ".";
    first = first.includes(".") ? first : first + ".";
    output.textContent = first;
  } else if (first === "") {
    clearAll();
    output.textContent = "Calculate";
  }
});

percentage.addEventListener("click", () => {
  if (solution) {
    solution = solution / 100;
    output.textContent = solution;
  } else if (first && second) {
    second = second / 100;
    output.textContent = `${first} ${operation} ${second}`;
  } else if (first && operation) {
    first = first / 100;
    output.textContent = `${first} ${operation}`;
  } else if (first) {
    first = first / 100;
    output.textContent = `${first}`;
  } else {
    clearAll();
    output.textContent = "Calculate";
  }
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
