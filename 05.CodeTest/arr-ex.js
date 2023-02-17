// const arr = [];

// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let sum = 0;
// const mapArr = arr.map((item) => (sum += item));

// console.log(sum);

// // // // // // //
// const str = "apple";

// /// //// ///// /////
// const obj = {
//   nba: "lebron",
//   soccer: "messi",
//   baseball: "TMT",
// };

// for (item in obj) {
//   console.log(obj[item]);
// }

// for (letter in str) {
//   console.log(letter);
// }

// Filter //
// const numbers2 = [1, 2, 3, 4, 5, 6];
// const filterArr = numbers2.filter((item) => item > 3);

// console.log(filterArr);

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// const resultArr = words.filter((item) => item.length > 6);

// console.log(resultArr);

// Includes //
// const numbers4 = [1, 2, 3, 4, 5, 6];
// console.log(numbers4.includes(3));
// console.log(numbers4.includes(7));

// let fruits1 = [
//   "사과",
//   "딸기",
//   "파인애플",
//   "수박",
//   "참외",
//   "오렌지",
//   "자두",
//   "망고",
// ];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// const sameArr2 = [];
// const diffArr2 = [];
// fruits1.map((item) => {
//   if (fruits2.includes(item)) {
//     sameArr.push(item);
//   } else {
//     diffArr.push(item);
//   }
// });

// const sameArr = fruits1.map((item) => fruits2.includes(item));
// const diffArr = fruits2.filter((item) => !fruits2.includes(item));

// console.log(sameArr);
// console.log(diffArr);

// Find, Findindex //

// const fruits3 = ["Apple", "Banana", "Cherry"];
// const findResult = fruits3.find((item) => {
//   return /^A/.test(item);
// });

// const findindexResult = fruits3.findIndex((item) => /^B/.test(item));

// console.log(findResult);
// console.log(findindexResult);

// Reduce //
const numbers5 = [1, 2, 3, 4, 5];
const sumResult = numbers5.reduce(function (acc, item, index, origin) {
  return (acc += item);
}, 0);
console.log(sumResult);
const numbers6 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
const resultReduce = numbers6.reduce(
  (acc, item) => {
    if (item < 0) {
      acc[0] += 1;
    } else {
      acc[1] += 1;
    }
    return acc;
  },
  [0, 0]
);

console.log(resultReduce);

const number7 = [];
