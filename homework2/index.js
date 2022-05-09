function makeCopyObj(obj) {
  const clone = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] != null) {
      clone[key] = makeCopyObj(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}

function selectFromInterval(arr, val1, val2) {
  const isNotNumber = (element) => typeof element != 'number';
  const condition =
    !Array.isArray(arr) ||
    arr.some(isNotNumber) ||
    !isFinite(val1) ||
    !isFinite(val2);

  if (condition) {
    throw new Error('incorrect data');
  }

  return arr.filter((item) => {
    if (val1 < val2) {
      return val1 <= item && item <= val2;
    } else {
      return val2 <= item && item <= val1;
    }
  });
}

const myIterable = {
  from: 5,
  to: 4,
  [Symbol.iterator]() {
    const checkCondition =
      !isFinite(this.from) || !isFinite(this.to) || this.from > this.to;

    if (checkCondition) {
      throw new Error('incorect data');
    }

    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        }

        return { done: true };
      },
    };
  },
};

for (let item of myIterable) {
  console.log(item);
}
