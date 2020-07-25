// 3 ways to clone an object

const person = {
  name: "Anhdota",
  age: 25,
  character: {
    height: "1m76",
    weight: "65kg",
  },
};

// ...spread --> shallow clone

// const personClone1 = { ...person };
// personClone1.character.height = "1m80";
// console.log("person", person, "- personClone1", personClone1);

// Object.assign --> shallow clone

// const personClone2 = Object.assign({}, person);
// personClone2.character.height = "1m80";
// console.log("person", person, "- personClone2", personClone2);

// JOSN.parse(JSON.stringify(person)) --> deep clone

const personClone3 = JSON.parse(JSON.stringify(person));
personClone3.character.height = "1m80";
console.log("person", person, "- personClone3", personClone3);

/**
 * Compare "spread" to "Object.assign"
 * "spred" can not change yourselve with "const" instance
 * "Object.assign" can change yourselve
 * */

try {
  person = { ...person, name: "Thang" };
  console.log("person", person);
} catch (error) {
  console.error("...spread ==> error");
  console.log("person", person);
}

try {
  Object.assign(person, { name: "Thang" });
  console.log("person", person);
} catch (error) {
  console.error("Object.assign ==> error");
  console.log("person", person);
}
