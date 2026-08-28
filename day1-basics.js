// Day 1 - JavaScript Basics practice

// 1. Basic output
console.log("Apna College");

// 2. Variables and data types
let age = 24;
console.log(typeof age); // "number"

let price = 100.5;
console.log(typeof price); // "number"

let fullName = "Tony Shark";
console.log(typeof fullName); // "string"

let isFollow = true;
console.log(typeof isFollow); // "boolean"

let x;
console.log(typeof x); // "undefined"

let n = null;
console.log(typeof n); // "object" -> famous JS quirk!

let bigNumber = BigInt("123");
console.log(typeof bigNumber); // "bigint"

let y = Symbol("id");
console.log(typeof y); // "symbol"

// 3. Objects (non-primitive type)
const student = {
  fullName: "Rahul Kumar",
  age: 20,
  cgpa: 8.2,
  isPass: true,
};

console.log(typeof student); // "object"
console.log(student.fullName); // "Rahul Kumar"
console.log(student["fullName"]); // same as above

// Object name can't be reassigned, but its keys CAN be updated
student.fullName = "Rahul Sharma";
console.log(student.fullName); // "Rahul Sharma"
