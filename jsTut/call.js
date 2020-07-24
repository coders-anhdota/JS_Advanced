function greeting(name) {
  console.log(`my name is ${name}`);
}
// the first parameter in call method is "this" for context
greeting.call(null, "Anhdota");

function greeting2(name, age) {
  console.log(`my name is ${this.name} & ${this.age}`);
}

var cat = {
  name: "Hele",
  age: 10,
};
greeting2.call(cat);
