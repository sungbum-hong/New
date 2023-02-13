class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  showSpec() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  }
}

// 클래스 상속
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  showSpec() {
    super.showSpec();
    console.log(
      `그리고 이차는 ${this.brand}의 ${this.color}색 자동차가 ${this.fuel} 힘으로 움직입니다`
    );
  }
}

const hyundai = new Car("hyundai", "blue");
hyundai.showSpec();

const tesla = new ElecCar("tesla", "red", "electricity");
tesla.showSpec();

console.log(hyundai instanceof Car);
console.log(tesla instanceof Car);
