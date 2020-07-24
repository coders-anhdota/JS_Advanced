// func.app(this, [param1, param2,.....])

function greeting2(name, age) {
  console.log(`my name is ${this.name} & ${this.age}`);
}

var cat = {
  name: "Hele",
  age: 10,
};
greeting2.apply(cat);

function sum() {
  const numbers = Array.from(arguments);

  return numbers.reduce((sum, num) => sum + num, 0);
}

function average() {
  var result = sum.apply(null, arguments);

  return result / arguments.length;
}

console.log(average(2, 5, 8, 89, 7));
