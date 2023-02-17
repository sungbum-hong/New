const nums = [-1.23, 13, 14.52, -33.53, 30];

//배열의 최대 최소 값 찾은 다음 소수점 버리기
console.log(Math.floor(Math.max(...nums)));
console.log(Math.floor(Math.min(...nums)));

// 절대값의 평균구하기
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum = sum + Math.abs(nums[i]);
}
console.log(sum / nums.length);

// 0 ~ 100 까지의 숫자 중에서 랜덤한 정수 만들기
console.log(Math.ceil(Math.random() * 100.9));
