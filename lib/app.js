"use strict";

var num = 50;
var PI = 3.1415926;

var fn = function fn() {
  console.log(num * PI);
};

// Expression bodies
var odds = evens.map(function (v) {
  return v + 1;
});
var nums = evens.map(function (v, i) {
  return v + i;
});

// Statement bodies
nums.forEach(function (v) {
  if (v % 5 === 0) fives.push(v);
});