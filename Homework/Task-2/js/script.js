class Student {
  constructor(name = "") {
    this.name = name;
  }
}
let st = new Student("Hamlet");
let st1 = new Student("Zeka");
let st2 = new Student("Asif");

let array = [st, st1, st2];

let method = (arr) => {
  let stName = [];

  for (let i = 0; i < arr.length; i++) {
    stName.push(arr[i].name);
  }

  return stName;
};

console.log(method(array));
