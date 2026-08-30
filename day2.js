// Day 2 - JavaScript Operators & Conditionals

// 1. Arithmetic Operators
let a = 10;
let b = 3;
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.3333...
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 1000

// 2. Assignment Operators
let c = 5;
c += 4; // c = c + 4 -> 9
c *= 2; // c = c * 2 -> 18

// 3. Comparison Operators
let x = 5;
let y = "5";
console.log("x == y:", x == y);   // true (loose equality)
console.log("x === y:", x === y); // false (strict equality)

// 4. Logical Operators
let isAdult = true;
let hasID = true;
console.log("Allowed:", isAdult && hasID); // true

// 5. Conditional Statements
let score = 85;
if (score >= 90) {
  console.log("Grade: A+");
} else if (score >= 80) {
  console.log("Grade: A");
} else {
  console.log("Grade: B");
}

// 6. Ternary Operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote);
