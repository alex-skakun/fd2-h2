function calc(val1, val2) {
    return (operation) => {
        if (typeof val1 === 'number' && typeof val2 === 'number') {
            switch(operation) {
                case 'add':
                    return val1 + val2;
                    break;
                case 'subtract':
                    return val1 - val2;
                    break;
                case 'multiply':
                    return val1 * val2;
                    break;
                case 'divide':
                    if (val2 !== 0){
                    return val1 / val2;
                    }
                    break;
                default:
                    return null;
            }
        } return null;
    } 
}