Array.prototype.myFilter = function (callback, thisArg) {
  const filterArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      filterArr.push(this[i]);
    }
  }

  return filterArr;
};

function createDebounceFunction(callback, delay) {
  let debounceTimer;

  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => callback.apply(this, args), delay);
  };
}
