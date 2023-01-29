function calc(number1, number2) {
    return function  (typeOperation) {
        if (typeof number1 !== 'number' && number2 !== 'number') {
            return null;
        }   switch (typeOperation) {
            case 'add':
                return (number1 + number2);
                break;
            case 'subtract':
                return (number1 - number2);
                break;
            case 'multiply':
                return (number1 * number2);
                break;
            case 'divide':
                return (number1 / number2);
                break;              
        } return null;
    };   
};
