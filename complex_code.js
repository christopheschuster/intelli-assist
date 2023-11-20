/*
 * Filename: complex_code.js
 * Description: Complex Code Example
 * Author: John Doe
 * Date: September 30, 2021
 */

// Import external libraries
const moment = require("moment");
const axios = require("axios");

// Define global variables
let counter = 0;

// Create a class for managing complex calculations
class ComplexCalculator {
  constructor() {
    this.result = 0;
  }

  // Perform a complex calculation
  calculate(input) {
    let num = parseInt(input);
    this.result += num * 2;
  }

  // Get the current result
  getResult() {
    return this.result;
  }
}

// Initialize the complex calculator
const calculator = new ComplexCalculator();

// Perform calculations using a loop
for (let i = 0; i < 500; i++) {
  calculator.calculate(i.toString());
}

// Display the result after calculations
console.log("Final Result:", calculator.getResult());

// Make an API request using axios
axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log("API Response:", response.data);
  })
  .catch((error) => {
    console.error("API Error:", error);
  });

// Perform a complex date calculation using moment.js
const date = moment().subtract(7, "days");
console.log("Previous Week:", date.format("YYYY-MM-DD"));

// Define a custom function for further complex operations
function complexOperation(a, b, c, d) {
  let result = ((a * b) + (c / d)) * Math.pow(2, 3);
  return result;
}

// Perform a complex operation
let operationResult = complexOperation(5, 10, 15, 20);
console.log("Operation Result:", operationResult);

// Run a time-consuming process using a recursive function
function recursiveProcess(n) {
  if (n <= 0) {
    return;
  }

  for (let i = 0; i < 1000000; i++) {
    counter++;
  }

  recursiveProcess(n - 1);
}

recursiveProcess(5);

// Display the final counter value
console.log("Counter Value:", counter);

// Generate a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNumber(1, 10);
console.log("Random Number:", randomNumber);

// Define an asynchronous function using async/await
async function complexAsyncFunction() {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log("Async API Response:", response.data);
  } catch (error) {
    console.error("Async API Error:", error);
  }
}

// Call the asynchronous function
complexAsyncFunction();

// Export the complex calculator class for reuse in other modules
module.exports = ComplexCalculator;