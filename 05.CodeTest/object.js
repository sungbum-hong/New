const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const resultObj = Object.assign(obj1, obj2);

console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("resultObj", resultObj);
console.log(obj1 === resultObj);

resultObj.a = 10;
console.log(obj1);

const sbObj = {
  name: "홍성범",
  age: "32",
  brain: null,
};

// const name = sbObj.name;
// const age = sbObj.age;
const { name: sbName, age, brain, girlFriend = "없음" } = sbObj;
console.log(sbName, age, brain, girlFriend);
