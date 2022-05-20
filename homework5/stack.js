class Stack {
  constructor(maxSize = 10) {
    if (!isFinite(maxSize)) {
      throw new Error('Invalid input');
    }

    this.maxSize = maxSize;
    this.stack = [];
  }

  static fromIterable(iterable) {
    if (iterable[Symbol.iterator] === undefined) {
      throw new Error(`${iterable} is not iterable`);
    }

    let size = 0;

    for (let elem of iterable) {
      size++;
    }

    const newStack = new Stack(size);

    for (let elem of iterable) {
      newStack.push(elem);
    }

    return newStack;
  }

  push(elem) {
    if (this.stack.length >= this.maxSize) {
      throw new Error('Stack overflow');
    }

    this.stack.push(elem);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  toArray() {
    return this.stack;
  }
}
