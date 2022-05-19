const concatStrings = (arg, separator) => {
  if (typeof separator !== 'string') separator = '';

  const result = [];
  const innerConcat = (arg) => {
    if (typeof arg != 'string') {
      return result.join(separator);
    }
    result.push(arg);

    return innerConcat;
  };
  return innerConcat(arg);
};

class Calculator {
  constructor(num1, num2) {
    if (this.isNumValid(num1) || this.isNumValid(num2)) {
      throw new Error('incorrect input');
    }

    this.num1 = num1;
    this.num2 = num2;
    this.logDiv = this.logDiv.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logMul = this.logMul.bind(this);
  }

  isNumValid(num) {
    return typeof num === 'bigint' || !isFinite(num);
  }

  setX(num) {
    if (this.isNumValid(num)) {
      throw new Error('incorrect input');
    }
    this.num1 = num;
  }

  setY(num) {
    if (this.isNumValid(num)) {
      throw new Error('incorrect input');
    }
    this.num2 = num;
  }

  logSum() {
    console.log(this.num1 + this.num2);
  }

  logMul() {
    console.log(this.num1 * this.num2);
  }

  logSub() {
    console.log(this.num1 - this.num2);
  }

  logDiv() {
    console.log(this.num1 / this.num2);
  }
}
