/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Michael") logs "Hello Michael"
 */

function greet(name) {
  // Your code here
  const print = name;
  console.log(`Hello ${print}`);
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  let i = 0;
  let sum = 0;
  for (i === 0; i < n; i++) {
    if (i % 2 === 1) {
      sum = sum + 1;
    }
  }
  return sum;
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (n % 2 === 0) {
    return n * 2;
  } else {
    return n * n;
  }
}



module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };

