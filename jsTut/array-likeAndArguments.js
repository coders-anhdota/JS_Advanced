// const names = ["Anh", "Linh", "Thang"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// it call array-like --> have key: [length, index]
const obj = {
  0: "Anh",
  1: "Linh",
  2: "Thang",
  length: 3,
};
// allway exsit in funtion
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  // convert arguments to an Array
  const numbers = Array.from(arguments)
  return result;
}

sum(1, 5, 8, 9, 10, 22);
