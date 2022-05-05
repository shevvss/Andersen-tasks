'use script';

function sumDivision() {
  let errorMessage = 'Incorrect input!';
  let num1 = +prompt('Enter number', '');

  if (!isFinite(num1)) {
    return console.log(errorMessage);
  }

  let num2 = +prompt('Enter number', '');

  if (!isFinite(num2)) {
    return console.log(errorMessage);
  }

  let sum = num1 + num2;
  let division = a / b;
  console.log(`Answer: ${sum}, ${division}`);
}

sumDivision();
