Array.prototype.myFilter = function (callback) {
  const filterArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
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
