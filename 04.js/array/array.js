const kdt = ["김성현", "윤제", "송민선", "송수빈"];

console.log(kdt.unshift("이효석")); // 길이값
console.log(kdt);

console.log(kdt.shift()); //어떤 값을 뺐는지 남긴다.
console.log(kdt);

kdt.push("백진솔");
console.log(kdt);

console.log(kdt.pop());
console.log(kdt);
// console.log(kdt.push("백진솔")); // 길이값

console.log(kdt[0], kdt[1], kdt[2], kdt[3]);

for (let i = 0; i < kdt.length; i++) {
  console.log(kdt[i]);
}
