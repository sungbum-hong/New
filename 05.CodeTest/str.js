// 문자열
const str = "Hello, World! World"; // -> H + e + l + l+ o

// 문자열 길이
console.log(str.length);

// 특정 문자열 찾기
console.log(str.indexOf("World"));

// 특정 문자열 자르기
// console.log(str.slice(0, 5));
// console.log(str.slice(0, str.indexOf("World")));

// // 특정 문자열 바꾸기
// console.log(str.replace("World", "뽀로로"));
// console.log(str);

// // 특정 문자열 반속
// const str2 = "우영";
// const longStr = str2.repeat(10) + "우";
// console.log(longStr);

// // 문자열 공백 제거
// const str3 = "   Hello, world   ";
// console.log(str3.trim());

// const wm = "수";
// const longwm = wm.repeat(10) + "박";
// console.log();

// const tc1 = 3;
// const tc2 = 4;

// function solution(n) {
//   let answer = "";

//   const str = "수박";

//   // 정석
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) {
//       answer += "수";
//     } else {
//       answer += "박";
//     }
//   }
//   return answer;

//   // 다른 방법
//   // return n % 2 === 1
//   //   ? str.repeat(Math.floor(n / 2)) + "수"
//   //   : str.repeat(Math.floor(n / 2)) + "박";
// }

// console.log(solution(tc1));
// console.log(solution(tc2));
