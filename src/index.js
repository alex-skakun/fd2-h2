/* 
Создайте функцию `calc`, которая должна принимать два числа и возвращать новую функцию.
Новая функция должна принимать в качестве аргумента одно из четырёх возможных действий:

- сложение `'add'`,
- вычитание `'subtract'`
- умножение `'multiply'`
- деление `'divide'`

Результатом функции должен быть результат указанного действия над двумя числами.

### Пример

```javascript
calc(4, 6)('add'); // вернёт 10
calc(4, 6)('subtract'); // вернёт -2
calc(4, 6)('multiply'); // вернёт 24
calc(4, 6)('divide'); // вернёт 0.6666666666666666
```

> Убедитесь что функции отрабатывают корректно только с правильными аргументами.
> В любом из случаев, когда выполнить операцию над числами не возможно, результатом должен быть `null`. */

function calc(num1, num2) {
  // body
}

function calc(x, y) {
  return function (oper) {
    if (typeof x === "number" && typeof y === "number") {
      switch (oper) {
        case "add":
          return x + y;
          break;
        case "subtract":
          return x - y;
          break;
        case "multiply":
          return x * y;
          break;
        case "divide":
          return x / y;
          break;
        default:
          null;
      }
    }
    return null;
  };
}
console.log(calc(4, 6)("add"));
console.log(calc()("add"));
console.log(calc("6", 8)("subtract"));
console.log(calc(6, 8)("subtract"));
