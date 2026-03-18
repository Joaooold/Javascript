// const Car = require("./commonsJS-ESmodule.js")
import { Car } from "./commonsJS-ESmodule.js";

function createCar() {
  const car1 = new Car("Toyota", "Corolla", 2022);
  const car2 = new Car("Honda", "Civic", 2022);

  car1.turnOn();
  car2.turnOn();

  console.log(car1.getDetails());
  console.log(car2.getDetails());

  car1.turnOff();
  car2.turnOff();
}

createCar();
