const user = {
  name: "뽀로로",
  hiehgt: 110,
  showName() {
    console.log(`해당 객체의 이름은 ${this.name} 입니다`);
  },

  sayHeight: function () {
    console.log(`${this.name}`);
  },
};

user.sayHeight();

function sayHeight() {
  console.log(`Hello, I'm ${this.name}`);
}

pororo.showName = function () {
  console.log(`해당 객체의 이름은 ${this.name} 입니다`);
};

pororo.showName();
