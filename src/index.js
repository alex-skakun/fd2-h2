function isValidNums(a, b) {
    return !(typeof a !== 'number' || typeof b !== 'number');
}

function add(a, b) {
    if (isValidNums(a, b)) {
        return a + b;
    }
    
    return null;
}

function subtract(a, b) {
    if (isValidNums(a, b)) {
        return a - b;
    }
    
    return null;
}

function multiply(a, b) {
    if (isValidNums(a, b)) {
        return a * b;
    }
    
    return null;
}

function divide(a, b) {
    if (isValidNums(a, b)) {
        return a / b;
    }
    
    return null;
}


function calc(a, b) {
    function operation(type) {
        switch (type) {
            case 'add':
                return add(a, b);
            case 'subtract':
                return subtract(a, b);
            case 'multiply':
                return multiply(a, b);
            case 'divide':
                if (b === 0) {
                    return null;
                }
                return divide(a, b);
            default:
                return null;
        }
    }

    return operation;
}