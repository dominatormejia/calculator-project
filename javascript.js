const button = document.querySelector("h1");
const output = document.querySelector(".output");
const operator = document.querySelectorAll(".operator");
const firstNumber = document.querySelectorAll(".number");
const secondNumber = document.querySelectorAll(".number");
const equal = document.querySelector(".equals");
const total = document.querySelector(".total");
const clear = document.querySelector(".clear");
let first = "";
let second = "";
let operation = "";

function add(array) {
  let sum = array.reduce((total, current) => total + Number(current), 0);

  console.log(`Sum of ${sum}`);
  total.textContent = `${sum}`;
}

function subtract(array) {
  let subtracted = array.reduce((total, current) => total - Number(current));

  console.log(`Total of ${subtracted}`);
  total.textContent = `${subtracted}`;
}

function multiply(array) {
  let multiplied = array.reduce((total, current) => total * Number(current));

  console.log(`Total of ${multiplied}`);
  total.textContent = `${multiplied}`;
}

function divide(array) {
  let divided = array.reduce((total, current) => total / Number(current));

  console.log(`Total of ${divided}`);
  total.textContent = `${divided}`;
}

function operations(numberOne, operator, numberTwo) {
  let array = [numberOne, numberTwo];

  if (operator === "+") {
    add(array);
  } else if (operator === "-") {
    subtract(array);
  } else if (operator === "*") {
    multiply(array);
  } else if (operator === "/") {
    divide(array);
  }
}

firstNumber.forEach((element) => {
  element.addEventListener("click", () => {
    if (!operation) {
      first += element.id;
      getElements();
    } else {
      second += element.id;
      getElements();
    }
  });
});

operator.forEach((element) => {
  element.addEventListener("click", () => {
    operation = element.id;
    getElements();
  });
});

function getElements() {
  console.log(`${first} ${operation} ${second}`);
  output.textContent = `${first} ${operation} ${second}`;

  equal.addEventListener("click", () => {
    operations(parseInt(first), operation, parseInt(second));
    total.classList.remove("hidden");
  });
}

clear.addEventListener("click", () => {
  total.classList.add("hidden");
  output.textContent = "Calculate";
  first = "";
  operation = "";
  second = "";
});
