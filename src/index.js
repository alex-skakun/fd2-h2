function calc(a, b) {
    return function mathDeal(string) {
        let result = 0;
        if (typeof a === 'number' && typeof b === 'number') {
            if (string == 'divide') {
                result = a / b;
            } else if (string == 'subtract') {
                result = a - b;
            } else if (string == 'multiply') {
                result = a * b;
            } else if (string == 'add') {
                result = a + b;
            }
            else {
                result = null;
            }
        }
        else {
            result = null;
        }
        return (result);
    }
}