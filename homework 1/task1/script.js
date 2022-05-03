'use script'
let x = +prompt('Enter x', '');
let n = +prompt('Enter n', '');

function numInSystem(x, n) {
    try {
        console.log(x.toString(n));
        } catch {
    console.log('Incorrect input!')
        }
}

numInSystem(x, n)
