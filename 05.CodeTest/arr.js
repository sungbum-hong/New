// 배열 매소드 map //
const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

const fruitsObjArr = fruits.map((item) => {
  return {
    id: index,
    name: name,
  };
});
// const fruitsObjArr = fruits.map(function (item, index, origin) {
//   return {
//     id: index,
//     name: item,
//   };

// // // // // // // // // //
// console.log("item", item);
// console.log("index", index);
// console.log("origin", origin);
// });
console.log(fruits);
console.log(fruitsObjArr);

// 나누기 //
const nums = [3, 6, 9, 12, 15, 18, 21];
const divideArr = nums.map(function (item, index) {
  return item / 3;
});
const divideArrArrow = nums.map((item, index) => item / 3);

console.log(divideArr);

// 곱하기 //
const nums2 = [1, 2, 3, 4, 5, 6];
// const multipleNums2 = nums2.map(function (item, index, origin) {
//   return item * 4;
// });

// 중괄호와 리턴 생략 //
const multipleNums2 = nums2.map((item, index, origin) => item * 4);

console.log(multipleNums2);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  console.log(i);
  console.log(fruits);
}
