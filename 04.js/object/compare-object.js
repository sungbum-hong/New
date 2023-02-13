const sb = {
  name: "홍성범",
  email: "mkonji2020@naver.com",
};
const 홍성범 = {
  name: "홍성범",
  email: "mkonji2020@naver.com",
};

console.log(sb === 홍성범);

const sbCopy = sb;
sbCopy.name = "sb";

sbCopy = 홍성범;

console.log(sb);
console.log(sbCopy);
console.log(sb === sbCopy);
