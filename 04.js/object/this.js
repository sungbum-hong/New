const user = {
  name: "홍성범",
  sayHello: function () {
    console.log(`안녕하세요. ${this.name} 님`);
  },
};

user.sayHello();

function sayHello() {
  console.log(`Hello, I'm ${this.name}`);
}
const boy = {
  name: "Mike",
  sayHello,
};

const girl = {
  name: "Jane",
  sayHello,
};

boy.sayHello();
girl.sayHello();
sayHello();
