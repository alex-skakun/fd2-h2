'use strict';

function calc(firstNumber, secondNumber) {
	return function doActions(option) {
	let result;
	if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
		switch (option) {
			case 'add':
				result = firstNumber + secondNumber;
				break;
			case 'subtract':
					result = firstNumber - secondNumber;
				break;
			case 'multiply':
					result = firstNumber * secondNumber;
				break;
			case 'divide':
					result = firstNumber / secondNumber;
				break;
			default:
					result = null;
				break;
		}
	} else {
		result = null;
	}
	return result;
}
}





