// Day 2 - Operators & Conditional Statements Practice

// ==========================================
// 1. ARITHMETIC OPERATORS
// ==========================================
let a = 10;
let b = 3;

console.log("--- Arithmetic Operators ---");
console.log("a + b =", a + b); // Addition: 13
console.log("a - b =", a - b); // Subtraction: 7
console.log("a * b =", a * b); // Multiplication: 30
console.log("a / b =", a / b); // Division: 3.3333...
console.log("a % b =", a % b); // Modulus (Remainder): 1
console.log("a ** b =", a ** b); // Exponentiation (10^3): 1000

// Increment & Decrement
let count = 5;
console.log("Post-increment count++:", count++); // Logs 5, then count becomes 6
console.log("Pre-increment ++count:", ++count);   // count becomes 7, logs 7


// ==========================================
// 2. ASSIGNMENT OPERATORS
// ==========================================
console.log("\n--- Assignment Operators ---");
let num = 20;
num += 5; // num = num + 5
console.log("num += 5 ->", num); // 25

num -= 10; // num = num - 10
console.log("num -= 10 ->", num); // 15

num *= 2; // num = num * 2
console.log("num *= 2 ->", num); // 30

num /= 3; // num = num / 3
console.log("num /= 3 ->", num); // 10


// ==========================================
// 3. COMPARISON OPERATORS (Strict vs Loose)
// ==========================================
console.log("\n--- Comparison Operators ---");
let x = 5;
let y = "5";

console.log("x == y (Loose Equality):", x == y);   // true (type coercion)
console.log("x === y (Strict Equality):", x === y); // false (checks value & type)
console.log("x != y:", x != y);                     // false
console.log("x !== y:", x !== y);                   // true

console.log("10 > 5:", 10 > 5);   // true
console.log("10 <= 10:", 10 <= 10); // true


// ==========================================
// 4. LOGICAL OPERATORS
// ==========================================
console.log("\n--- Logical Operators ---");
let isAdult = true;
let hasID = false;

console.log("AND (&&):", isAdult && hasID); // false (both must be true)
console.log("OR (||):", isAdult || hasID);  // true (at least one is true)
console.log("NOT (!):", !isAdult);          // false (inverts boolean)


// ==========================================
// 5. CONDITIONAL STATEMENTS (if / else if / else)
// ==========================================
console.log("\n--- Conditional Statements ---");
let age = 18;

if (age >= 18) {
  console.log("Eligible to vote! 🗳️");
} else {
  console.log("Not eligible to vote yet.");
}


// Practice 1: Student Grade Calculator
let score = 85;
let grade;

if (score >= 90 && score <= 100) {
  grade = "A+";
} else if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else {
  grade = "F";
}

console.log(`Score: ${score} | Grade: ${grade}`);


// ==========================================
// 6. TERNARY OPERATOR (Shortened if-else)
// ==========================================
console.log("\n--- Ternary Operator ---");
let userAge = 21;
let status = userAge >= 18 ? "Adult" : "Minor";
console.log(`User is an: ${status}`);


// ==========================================
// 7. SWITCH STATEMENT
// ==========================================
console.log("\n--- Switch Statement ---");
let dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid Day";
}

console.log(`Day ${dayNumber} is ${dayName}`);
