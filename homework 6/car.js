class Car {
  #brand = 'Kia';
  #model = 'Sportage';
  #yearOfManufacturing = 2020;
  #maxSpeed = 201;
  #maxFuelVolume = 20;
  #fuelConsumption = 12;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  start() {
    if (this.#isStarted) throw new Error('Машина уже заведена');

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) throw new Error('Машина ещё не заведена');

    this.#isStarted = false;
  }

  fillUpGasTank(amount) {
    if (!isFinite(amount) || amount <= 0)
      throw new Error('Неверное количество топлива для заправки');

    if (this.#currentFuelVolume + amount >= this.#maxFuelVolume)
      throw new Error('Топливный бак переполнен');

    this.#currentFuelVolume += amount;
  }

  drive(speed, hours) {
    if (!isFinite(speed) || speed <= 0) throw new Error('Неверная скорость');

    if (!isFinite(hours) || hours <= 0)
      throw new Error('Неверное количество часов');

    if (speed > this.#maxSpeed)
      throw new Error('Машина не может ехать так быстро');

    if (!this.#isStarted)
      throw new Error('Машина должна быть заведена, чтобы ехать');

    const distance = speed * hours;
    const requiredAmountFuel = (this.#fuelConsumption * distance) / 100;

    if (this.#currentFuelVolume < requiredAmountFuel)
      throw new Error('Недостаточно топлива');

    this.#mileage += distance;
  }

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (value.length <= 1 || value.length >= 50)
      throw new Error('Неверное количество символов');

    this.#brand = value;
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    if (value.length <= 1 || value.length >= 50)
      throw new Error('Неверное количество символов');

    this.#model = value;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    if (value <= 1900 || value >= 2022)
      throw new Error('Неверно указан год производства');

    this.#yearOfManufacturing = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (value <= 100 || value >= 300)
      throw new Error('Максимальная скорость должна быть от 100 до 300 км/ч');

    this.#maxSpeed = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (this.#maxFuelVolume < 5 || this.#maxFuelVolume > 20)
      throw new Error('Топливный бак должен быть от 5 до 20 л');

    this.#maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    this.#fuelConsumption = value;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }
}
