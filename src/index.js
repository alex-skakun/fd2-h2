
function calc(num1, num2) {
    
    if (num1 !== NaN && num2 !== NaN) {
        
        return function (performance) {

            switch (performance) {
                
                case 'add': return  num1 + num2;
                    break;
                case 'subtract': return num2 - num1;
                    break;
                case 'multiply': return num1 * num2;
                    break;
                case 'divide': return num1 / num2;
                    break;
                default: return null; 
            }
        
        }

    }  return null;

}