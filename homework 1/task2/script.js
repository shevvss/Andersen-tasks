'use script';
function sumDivision() {
    let errorMessage = 'Incorrect input!';

    let a = +prompt('Enter a', '');
    if (!isFinite(a)) return console.log(errorMessage);

    let b = +prompt('Enter b', '');
    if (!isFinite(b)) return console.log(errorMessage)

    let sum = a + b;
    let division = a/b;
    console.log(`Answer: ${sum}, ${division}`)
}

sumDivision()