const sb = {
  name: "홍성범",
  age: 32,
};

sb.name;
sb["age"];

// 접근
console.log(sb.name);
console.log(sb["age"]);

// 추가
sb.email = "mkonji2020@naver.com";
sb["haircolor"] = "black";

// 삭제
delete sb.email;

console.log(sb);
