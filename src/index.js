function calc(a, b) {
    return function mathOperation(operation) {
        if (!isValidNumber(a, b)) {
            return null;
        }
        if (!isValidOperation(operation.toUpperCase())) {
            return null;
        }

        if (operation == 'add') {
            return add(a, b);
        }
        else if (operation == 'subtract') {
            return subtract(a,b);
        }
        else if (operation == 'multiply') {
            return multiply(a,b);
        }
        else if (operation == 'divide') {
            return divide(a,b);
        } else {
            return null}
    }
}

function isValidNumber(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') {
        return false;
    } else {
        return true;}
}

function isValidOperation(operation) {
    if (operation !== 'add' &&
        operation !== 'subtract' &&
        operation !== 'multiply' &&
        operation !== 'divide') {
        return false;
    }
    else return true;
}

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
}
