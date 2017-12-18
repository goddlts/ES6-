let num = 50;
const PI = 3.1415926;

let fn = () => {
  console.log(num * PI);
}

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});