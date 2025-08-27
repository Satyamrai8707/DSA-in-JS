//Build-in error handling in JavaScript
// Example of a simple try-catch block
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
  }
  finally {
    console.log("Execution completed.");
  }
}

console.log(divide(10, 1)); // This will trigger the error

//Syntax errors
//ReferenceError
//TypeError
// RangeError
//EvalError
// URIError
//AggregateError

