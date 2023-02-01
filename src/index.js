// первый способ
function calc (numOne, numTwo){
    return function (options){};
    }
    const operation = {
        add: "add",
        subtract: "subtract",
        multiply: "multiply",
        divide: "divide"
    }
    function options (operation) {
        let result;
        if ("number" !== typeof numOne && numTwo) {
            if (operation === 'add'){
                result = numOne + numTwo ;
               } else if (operation ===  'subtract') {
                   result = numOne - numTwo ;
               } else if (operation === 'multiply') {
                   result = numOne * numTwo ;
               } else  (operation === 'divide') ;{
                   result = numOne / numTwo ;
               }
               return result;
        } else {
           result = null;
        }
        return result; 
    }

//второй способ

function calc (numOne, numTwo){
    return function (options){};
    }
  
function options () {
    const operation = {
        add: "add",
        subtract: "subtract",
        multiply: "multiply",
        divide: "divide"
    }
    if ("number" === typeof numOne && numTwo) {
    let result;
    switch (operation){
        case "add": result = numOne + numTwo; break
case "subtract": result =  numOne - numTwo; break
case "multiply": result =  numOne * numTwo; break
case "divide": result =  numOne / numTwo ; break
            default: result = null; break
    }

} else {
    result = null;
} return result}