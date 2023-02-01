function calc(numberA, numberB) {  
  return function operation(selectedOperation) {
  		if(typeof numberA !== "number" || typeof numberB !== "number") {
  			return null
  		}
    switch (selectedOperation) {
      case 'add':
        return (numberA + numberB);
      case 'subtract':
        return (numberA - numberB);
      case 'multiply':
        return (numberA * numberB);
      case 'divide':
        return (numberA / numberB);
      default: return null;
    }
  }
}

