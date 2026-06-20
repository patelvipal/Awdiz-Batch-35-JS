//Q1. Print numbers from 100 to 1.

for (let i = 100; i >= 1; i--) {
  console.log("i: ", i);
}

//Q2. Prints all numbers between 1 and 100 divisible by 7.

for (let j = 1; j <= 100; j++) {
  if (j % 7 === 0) {
    console.log("j: ", j);
  }
}

//Q3. Find sum of all odd numbers between 1 and 50.

sum = 0;
for (let k = 1; k <= 50; k++) {
  if (k % 2 === 0) {
    sum += k;
  }
}
console.log("sum: ", sum);

//Q4. Print the multiplication table of a user-given number.

let mul = 5;

for (let l = 1; l <= 10; l++) {
  console.log(`${mul} x ${l} = ${mul * l}`);
}

//Q5. Count how many numbers between 1 and 500 are divisible by 10.

let count = 0;
for (let m = 1; m <= 100; m++) {
  if (m % 10 === 0) {
    count++;
  }
}
console.log("Count: ", count);

//Q6. Print numbers from 1 to 100 but skip numbers divisible by 3.

for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0) {
    console.log("N: ", n);
  }
}

//Q7. Find the factorial of a number using a for loop.

let num = 5;
let fact = 1;

for (let o = 1; o <= num; o++) {
  fact *= o;
}

console.log(fact);

//Q8. Print this pattern using loops:

for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

//Q9. Find the sum of digits of a number using a loop.

let val = 1234;
let sums = 0;

while (val > 0) {
  let digit = val % 10;
  sums += digit;
  val = Math.floor(val / 10);
}

console.log("Value: ", val);

//Q10. Reverse a number using a loop.

let numbers = 12345;
let reverses = 0;

while (numbers > 0) {
  let digital = numbers % 10;
  reverses = reverses * 10 + digital;
  numbers = Math.floor(numbers / 10);
}

console.log("Reverse values: ", reverses);

//Q11. Check whether a number is: Divisible by 2 Divisible by 3 Divisible by both Not divisible by both.

let a = 12;

if (a % 2 === 0 && a % 3 === 0) {
  console.log("Divisible by both");
} else if (a % 2 === 0) {
  console.log("Divisible by 2");
} else if (a % 3 === 0) {
  console.log("Divisible by 3");
} else {
  console.log("Not divisible by both");
}

//Q12. Create a grading system: 90+  → A Grade 75-89 → B Grade 50-74 → C Grade 35-49 → D Grade Below 35 → Fail.

let marks = 85;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else if (marks >= 50) {
  console.log("C Grade");
} else if (marks >= 35) {
  console.log("D Grade");
} else {
  console.log("Fail");
}

//Q13. Check whether a person is eligible for marriage:

let age = 22;

if (age >= 21) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

//Q14. Find the largest number among three numbers.

let e = 10;
let f = 50;
let g = 30;

if (e > f && e > g) {
  console.log(a);
} else if (f > e && f > g) {
  console.log(f);
} else {
  console.log(g);
}

//Q15. Check username and password: username = admin password = 12345 Correct → Login SuccessfulWrong → Invalid Login Switch Questions

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login Successfully");
} else {
  console.log("Invalid Login");
}

//Q16. Create a calculator using switch: +-*/Example: 10 + 5 = 15.

let ab = 10;
let bc = 5;
let op = "+";

switch (op) {
  case "+":
    console.log("Arithmetic: ", ab + bc);
    break;

  case "-":
    console.log("Substraction: ", ab - bc);
    break;

  case "*":
    console.log("Multiple: ", ab * bc);
    break;

  case "/":
    console.log("Devided: ", ab / bc);
    break;

  default:
    console.log("Invalid");
}

//Q17. Create switch for mobile brands:

let brand = "Samsung";

switch (brand) {
  case "Apple":
    console.log("iPhone");
    break;

  case "Samsung":
    console.log("Galaxy S24");
    break;

  case "OnePlus":
    console.log("Android Phone");
    break;

  default:
    console.log("Brand Not Found");
}

//Q18. Create switch for user roles:

let role = "student";

switch (role) {
  case "admin":
    console.log("Full Access");
    break;

  case "teacher":
    console.log("Manage Students");
    break;

  case "student":
    console.log("View Courses");
    break;

  default:
    console.log("Access Denied");
}

//Q19. Print numbers from 1 to 100: If number is: divisible by 3 → "Fizz" divisible by 5 → "Buzz" divisible by both → "FizzBuzz" otherwise print number

for (let jk = 1; jk <= 100; jk++) {
  if (jk % 3 === 0 && jk % 5 === 0) {
    console.log("FizzBuzz");
  } else if (jk % 3 === 0) {
    console.log("Fizz");
  } else if (jk % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(jk);
  }
}

//Q20. Find how many numbers between 1 and 200 are: Even, Odd, Divisible by 5 Print final counts.

let even = 0;
let odd = 0;
let div5 = 0;

for (let v = 1; v <= 200; v++) {
  if (v % 2 === 0) {
    even++;
  } else {
    odd++;
  }

  if (v % 5 === 0) {
    div5++;
  }
}

console.log("Even =", even);
console.log("Odd =", odd);
console.log("Divisible by 5 =", div5);
