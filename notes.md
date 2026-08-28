# Day 1 — JavaScript Basics

## What is JavaScript?

JavaScript is the programming language of the web. It's what makes a page interactive — it can calculate values, manipulate data, and validate what a user enters. Unlike HTML (which builds structure) and CSS (which handles styling), JavaScript is what lets a page actually respond and change.

It's built on a standard called ECMAScript, and it accepts both single quotes and double quotes for strings — so `'hello'` and `"hello"` are both valid.

To get a feel for it, here are two of the simplest things JavaScript can do:

```js
alert("apna college");        // shows a popup in the browser
console.log("Apna College");  // prints a message to the browser console
```

## Setting Up

I'm using VS Code, which is a free code editor made by Microsoft — it's one of the most widely used tools for this.

To connect JavaScript to a webpage, a `<script>` tag links an external `.js` file inside the HTML file:

```html
<html>
  <body>
  </body>
  <script src="first.js"></script>
</html>
```

This is usually placed in `index.html`, with the actual JavaScript logic living separately in `first.js`.

## Variables

A variable is essentially a container for data. One thing I found interesting is that JavaScript is dynamically typed — you never have to declare what type of data a variable will hold. JavaScript figures that out on its own based on the value you give it.

Variable names are also case-sensitive, so `age` and `Age` would be treated as two completely different variables.

There are a few rules for naming them:

- Names can only include letters, digits, underscores (`_`), or dollar signs (`$`).
- A digit cannot be the first character — `1name` isn't valid, but `name1` is.
- Reserved keywords (like `let` or `function`) can't be used as variable names.

### var, let, and const

JavaScript gives you three ways to declare a variable, and each behaves differently:

| Keyword | Re-declarable | Updatable | Scope |
|---|---|---|---|
| `var` | Yes | Yes | Global (older syntax, from before ES6) |
| `let` | No | Yes | Block-scoped (modern syntax, ES6+) |
| `const` | No | No | Block-scoped (modern syntax, ES6+) |

`let` and `const` were introduced with ES6 in 2015 and are now the standard way to write JavaScript. `var` still works, but it's mostly considered outdated.

## Data Types

JavaScript has seven primitive (fixed) data types, plus one non-primitive type — objects.

**Primitive types:**

| Type | Example | `typeof` result |
|---|---|---|
| Number | `let age = 24;` | `"number"` |
| String | `let fullName = "Tony Shark";` | `"string"` |
| Boolean | `let isFollow = true;` | `"boolean"` |
| Undefined | `let x;` (declared, no value assigned) | `"undefined"` |
| Null | `let n = null;` | `"object"` |
| BigInt | `let x = BigInt("123");` | `"bigint"` |
| Symbol | `let y = Symbol("id");` | `"symbol"` |

The `null` result is a well-known quirk in JavaScript — logically it should return `"null"`, but it's actually a long-standing bug in the language that was never fixed, since fixing it would break too much existing code.

**Non-primitive type — Object:**

An object is a collection of key-value pairs, useful for grouping related data together:

```js
const student = {
  fullName: "Rahul Kumar",
  age: 20,
  cgpa: 8.2,
  isPass: true,
};

console.log(student.fullName);      // "Rahul Kumar"
console.log(student["fullName"]);   // same result, different syntax
```

Something worth remembering: when an object is declared with `const`, the object itself can't be reassigned to something new — but the values inside it can still be changed:

```js
student.fullName = "Rahul Sharma"; // this is allowed, even with const
```

`const` locks the variable binding, not the contents of the object.

## Takeaways

JavaScript is what brings a webpage to life — variables are how it stores and works with data, and understanding the different data types is the foundation everything else builds on. The `const` vs `let` vs `var` distinction and the object mutability rule were the two things that took a moment to click, but make a lot more sense now that I've worked through examples.
