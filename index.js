'use strict';

function calc(value1, value2) {
    return function operation (calculationOperation) {
        if ((typeof value1 !== 'number') && (typeof value2 !== 'number')) {
            return null;
        }
        switch (calculationOperation) {
            case 'add':
                console.log(value1 + value2);
                break;
            case 'substract':
                console.log(value1 - value2);
                break;
            case 'multiply':
                console.log(value1 * value2);
                break;
            case 'divide':
                console.log(value1 / value2);
                break;
        }
    }

}