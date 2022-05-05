'use script';

const num1 = +prompt('Enter number', '');
const num2 = +prompt('Enter number', '');

function numInSystem(x, n) {
  try {
    console.log(x.toString(n));
  } catch {
    console.log('Incorrect input!');
  }
}

numInSystem(num1, num2);
