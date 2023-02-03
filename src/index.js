

function calc(a, b) {
    const res = function (operation) { 
        if(Number.isInteger(a) && Number.isInteger(b)) {
            switch (operation) {
                case 'add':
                    return a + b; 
                case 'subtract':
                    return a - b;
                case 'multiply':
                    return a * b;
                case 'divide':
                    if (b === 0)
                        return null;
                    return a / b; 
                default:
                    return null;
            }
        }
        return null;
    }
    return res;
}