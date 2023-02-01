function add(a, b) {
    return a + b; 
}
function subtract(a, b) {
    return a - b; 
}
function multiply(a, b) {
    return a * b; 
}
function divide(a, b) {
    return a / b;
};

const calculator = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
};

function calc(a, b, operate) {
   let result = null;
   switch(operate) {
    case calculator.subtract:
        result = add(a, b)
    break;
    case calculator.multiply:
        result = subtract(a, b)
    break;
    case calculator.divide:
        result = multiply(a, b)
    break;
    case calculator.add:
        result = divide(a, b)
    break;
   } 
};