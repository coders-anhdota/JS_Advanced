var person = {
  name: "Anhdota",
  sayHi: function () {
    console.log("Hi, my name is ", this.name);
  },
};

person.sayHi();

// assigning result to become a function --> result dont have any context for "this"
var result = person.sayHi;
result();
// using bind(person) to make function understamd context for "this" is "person"
var result_1 = person.sayHi.bind(person);
result_1();

// arrow function expression

var a = {
  name: "AAA",
  run: function () {
    var run2 = function () {
      console.log("what is your name?", this.name);
    };
    run2();
  },
};
// result is undefined --> this.name in function run2 does not have context for "this"
a.run();

// way 1 using bind(this) => make child function has context of parent funtion
var b = {
  name: "AAA",
  run: function () {
    var run2 = function () {
      console.log("what is your name?", this.name);
    }.bind(this);
    run2();
  },
};

b.run();
// way 2 using arrow function => arrow function dont have context of themselve
var b = {
  name: "AAA",
  run: function () {
    var run2 = () => {
      console.log("what is your name?", this.name);
    };
    run2();
  },
};

b.run();
