class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize) {
    if (!isFinite(maxSize)) {
      throw new Error('Invalid input');
    }

    this.maxSize = maxSize;
    this.first = null;
    this.last = null;
    this.size = 0;
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

  push(value) {
    if (this.size >= this.maxSize) {
      throw new Error('Stack overflow');
    }

    let node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }

    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    this.size--;

    return temp.value;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.first.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const array = [];

    for (let i = 0; i < this.size; i++) {
      array.push(this.first.value);
      this.first = this.first.next;
    }

    return array;
  }
}
