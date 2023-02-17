const fruits = ["사과", "바나나", "수박", "망고", "딸기"];
console.log(fruits);
console.log(...fruits);

function conLog(...rest) {
  rest.map((item) => console.log(item));
}

// conLog(fruits[0], fruits[1], fruits[2]);
conLog(...fruits);

const str = "apple";
const strToArr = [...str];
console.log(strToArr);

const strToArr2 = str.split("");
console.log(strToArr2);
