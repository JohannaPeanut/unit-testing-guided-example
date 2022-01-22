function sum(a, b) {
  if (a && b) {
    return a + b;
  } else if (!a && !b) {
    return 0;
  } else {
    return a;
  }
}

function subtract(a, b) {
  if (a && b) {
    return a - b;
  } else if (!a && !b) {
    return 0;
  } else {
    return a;
  }
}

function divide(a, b) {
  if (a && b) {
    return a / b;
  } else if (!a && !b) {
    return 0;
  } else if (b===0) {
    throw new Error('Cannot divide by 0');
  }
    else {
    return a;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
