var a = 10;
let b = 20;
const c = 30;

console.log(a); //check
console.log(b); //check
console.log(c); //check

a = 180;

b = 240;

console.log(a);
console.log(b);

//Hoisting

console.log(x);
var x = 410;

console.log(y);
let y = 150;

//Scope

var m = "var scope";

{
  var m = "changed";
  console.log(m);
}

console.log(m);

let n = "let scope";

{
  let n = "changed";
  console.log(n);
}

console.log(n);

const p = "const scope";

{
  const p = "changed";
  console.log(p);
}

console.log(p);
