function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showY = () => {
    console.log(`이름은 ${this.name} 이고, 성별은 ${this.gender} 입니다`);
  };
}

let user1 = new Kdt("1", "F");
let user2 = new Kdt("2", "F");
let user3 = new Kdt("3", "M");
let user4 = new Kdt("4", "F");
let user5 = new Kdt("5", "M");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

user1.showY();
user2.showY();
user3.showY();
user4.showY();
user5.showY();
