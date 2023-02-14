// --> Hello
let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split("-");
console.log(helloTestArr);

let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);

let resultStr = reverseHelloTestArr.join("");
console.log(resultStr);

let HelloStr = helloTestArr.join("*");
console.log(HelloStr);

let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);

const obj = {
  arr: ["a", "b", "c"],
  number: 10,
};

let testStr = obj.arr.reverse().join("");
console.log(testStr);
