function increment(input) { return input + 1;}
function decrement(input) { return input - 1; }
function double(input) { return input * 2; }
function halve(input) { return input / 2; }

var initial_value = 1;

var pipeline = [
  increment,
  increment,
  increment,
  double,
  increment,
  increment,
  halve
];

var final_value = pipeline.reduce(function(acc, fn) {
  return fn(acc);
}, initial_value);

var reversed = pipeline.reduceRight(function(acc, fn) {
  return fn(acc);
}, initial_value)

console.log("final_value: ", final_value)
console.log("reversed: ", reversed)