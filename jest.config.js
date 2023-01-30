// module.exports = {
//     testEnvironment: 'jsdom'
// };


 function calc (numder1, number2, operation) {
    if ( operation ==='add') { 
    operation = numder1 + number2;
    } else if ( operation === 'subtract') {
    operation = numder1 - number2;
    } else if ( operation === 'multiply') {
    operation = numder1 * number2;
    } else if ( operation === 'divide') {
    operation = numder1 / number2;
    }
    return operation;
}
console.log (calc(4, 6, 'divide'));
