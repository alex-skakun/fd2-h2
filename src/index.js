
function calc(num1, num2) {
    
    return function (performance) {

        if ( typeof num1 === "number"  && typeof num2 === "number") {

            switch (performance) {
                
                case 'add': return  num1 + num2;
                    break;
                case 'subtract': return num1 - num2;
                    break;
                case 'multiply': return num1 * num2;
                    break;
                case 'divide': return num1 / num2;
                    break;
                default: return null; 
            }

        } return null;
    
    }

}