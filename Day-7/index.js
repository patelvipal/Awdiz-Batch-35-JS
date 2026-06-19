// 1. every()
// Question 1:-Create an array [10, 20, 30, 40]. Check if every numbersber is less than 50.

// const isBelowThreshold=(numbers)=>numbers<50
// const arr=[10, 20, 30, 40]
// console.log(arr.every(isBelowThreshold))

// Question 2:-Create an array [18, 22, 25, 16, 30]. Check if every student is eligible to vote (age >= 18).

// const eligible=(age)=> age>=18;
// const arr=[18, 22, 25, 16, 30];
// console.log(arr.every(eligible))

// 2. fill()
// Question 1:-Create an array [1, 2, 3, 4, 5]. Replace all elements with 0 using fill().

const numbers = [2, 4, 6, 8, 10];
console.log(numbers.fill(0, 0));

// Question 2:-Create an array ["A", "B", "C", "D", "E"]. Replace only "B" and "C" with "X" using fill().

// const alpha=["A", "B", "C", "D", "E"];
// console.log(alpha.fill("X",1,3))

// 3. findLast()
// Question 1:-Create an array [12, 45, 78, 23, 90, 34]. Find the last numbersber greater than 50.
// learn again
// const array=[12, 45, 78, 23, 90, 34]
// const lastElementWhoPassedCondition=array.findLast((ele)=>ele>50)
// console.log(lastElementWhoPassedCondition,"ele")

// Question 2:-Create an array [5, 8, 11, 14, 17, 20]. Find the last even numbersber.

// 5. includes()
// Question 1:-Create an array ["HTML", "CSS", "JavaScript"]. Check whether "React" exists in the array.

// const arr=["HTML", "CSS", "JavaScript"];
// console.log(arr.includes("react"))

// Question 2:-Create an array [100, 200, 300, 400]. Check whether 300 exists in the array.
// const array=[100, 200, 300, 400];
// console.log(array.includes(300))

// 6. join()
// Question 1:-Create an array ["Vipal", "Rahul", "Rohit"]. Join all names using " | " as the separator.

const array = ["Virat", "Rohit", "Rahul"];
console.log(array.join("|"));

// Question 2:-Create an array ["M", "E", "R", "N"]. Join all letters without any separator to form a word.
const letters = ["M", "E", "R", "N"];
console.log(letters.join(""));

// 7. lastIndexOf()
// Question 1:-Create an array ["apple", "banana", "apple", "orange", "apple"]. Find the last index of "apple".
const friuts = ["apple", "banana", "apple", "orange", "apple"];
console.log(friuts.lastIndexOf("apple"));

// 8. reverse()
// Question 1:-Create an array [1, 2, 3, 4, 5]. Reverse the array and print it.

const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());

// Question 2:- Create an array ["HTML", "CSS", "JavaScript"]. Reverse the order of technologies.

const learn = ["HTML", "CSS", "JavaScript"];
console.log(learn.reverse());

// 9. slice()
// Question 1:-Create an array ["A", "B", "C", "D", "E"]. Extract "C" and "D" using slice().

const alpha = ["A", "B", "C", "D", "E"];
console.log(alpha.slice(2, 4));

// Question 2:-Create an array [10, 20, 30, 40, 50, 60]. Extract the last three elements using slice().
const elements = [10, 20, 30, 40, 50, 60];
console.log(elements.slice(3, 6));

// 10. splice() learn again
// Question 1:-Create an array ["Jan", "Mar", "Apr"]. Insert "Feb" at the correct position using splice().
// galt hai
const months = ["Jan", "Mar", "Apr"];
console.log(months.splice(1, 0, "feb"));

//Question 2:-Create an array ["HTML", "CSS", "PHP"]. Replace "PHP" with "JavaScript" using splice().
const language = ["HTML", "CSS", "PHP"];
console.log(language.splice(2, 1, "JavaScript"));

// 11. toString()
// Question 1:-Create an array [1, 2, 3, 4, 5]. Convert the array into a string using toString().

let numbersbers = [1, 2, 3, 4, 5];
console.log(numbersbers.toString());

// Question 2:-Create an array ["HTML", "CSS", "JavaScript"]. Convert it into a string and print the result.
let languages = ["HTML", "CSS", "JavaScript"];
console.log(languages.toString());
