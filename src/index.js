//  Создайте функцию calc, которая должна принимать два числа и возвращать новую функцию. Новая функция должна принимать в качестве аргумента одно из четырёх возможных действий:
//  сложение 'add',
//  вычитание 'subtract'
//  умножение 'multiply'
//  деление 'divide'
//  Результатом функции должен быть результат указанного действия над двумя числами.

//  Пример
//  calc(4, 6)('add'); // вернёт 10
//  calc(4, 6)('subtract'); // вернёт -2
//  calc(4, 6)('multiply'); // вернёт 24
//  calc(4, 6)('divide'); // вернёт 0.6666666666666666
//  Убедитесь что функции отрабатывают корректно только с правильными аргументами. В любом из случаев, когда выполнить операцию над числами не возможно, результатом должен быть null.
 


// проверка на число
function isNumber(num) {
    return typeof num === 'number' && !isNaN(num);
}

// возвращаемая функция вычислений
function resolve(action){  
    // console.log(action);

   if(action !== 'add' && action !== 'subtract' && action !== 'multiply' && action !== 'divide')  {
        return null;
   }  
   if (isNumber(numOne) && isNumber(numTwo)) {
        let result = 0;
        switch(action){
            case 'add' : result = numOne + numTwo;
            break;
            case 'subtract' : result = numOne - numTwo;
            break;
            case 'multiply' : result = numOne * numTwo;
            break;
            case 'divide' : (numTwo === 0) ? result = null : result = numOne / numTwo;
            break;
        }
        return result;         
    }  else{
        return null;
    } 
}

// функция cals 
let calc = function(numOne, numTwo){
            this.numOne = numOne,
            this.numTwo = numTwo;
            return resolve;
        };

// function calc(numOne, numTwo){
//     this.numOne = numOne,
//     this.numTwo = numTwo;
//     return resolve;
// };

// console.log(calc(10, 5)('Add'));
// console.log(calc(10, 5)('ADD'));
// console.log(calc(10, 5)('Subtract'));
// console.log(calc(10, 5)('SUBTRACT'));
// console.log(calc(10, 5)('Multiply'));
// console.log(calc(10, 5)('MULTIPLY'));
// console.log(calc(10, 5)('Divide'));
// console.log(calc(10, 5)('DIVIDE'));
// console.log(calc(10, 5)('unknown'));

// const result = calc(1, 2);
// console.log(typeof result);
// console.log(typeof result, "toBe('function')");
// const result2 = calc('1', true);
// console.log(typeof result2);
// console.log(typeof result2, "toBe('function')");
// console.log(calc(10, 5)('add'), 'toBe(15)');
// console.log(calc('10', 5)('add'), 'toBeNull'); 
// console.log(calc(10, 5)('subtract'), 'toBe(`5)'); 
// console.log(calc('10', 5)('subtract'), 'toBeNull'); 
// console.log(calc(10, 5)('multiply'), 'toBe(50)'); 
// console.log(calc('10', 5)('multiply'), 'toBeNull()'); 
// console.log(calc(10, 5)('divide'), 'toBe(2)'); 
// console.log(calc('10', 5)('divide'), 'toBeNull'); 
 
  
 