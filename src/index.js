function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function calc(x, y) {

    return function doOperation(operation) {
        if (Number.isInteger(x) && Number.isInteger(y)) {

            switch (operation) {
                case 'add':
                    return add(x, y);
                case 'subtract':
                    return subtract(x, y);
                case 'multiply':
                    return multiply(x, y);
                case 'divide':
                    return divide(x, y);
                default:
                    return null;
            }

        }
        return null;

    };

}
