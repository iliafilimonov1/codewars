// task. Напишите функцию, которая принимает строку скобок и определяет, допустим ли порядок скобок. Функция должна возвращать значение true, если строка действительна и false недействительна.

function validParentheses(parens) {
	let counter = 0;

	for (let i = 0; i < parens.length; i++) {
		if (parens[i] === "(") {
			counter++;
		} else {
			counter--;
		}
		if (counter < 0) {
			return false;
		}
	}

	if (counter === 0) {
		return true;

	} else {
		return false;
	}
}


validParentheses("()"); // true
validParentheses(")(()))"); // false
validParentheses("("); // false
validParentheses("(())((()())())"); // true



// task. Напишите функцию, которая принимает строку скобок и определяет, допустим ли порядок скобок. Функция должна возвращать значение true, если строка действительна и false недействительна.

function validParentheses(parens) {
	let counter = 0;

	for (let i = 0; i < parens.length; i++) {
		if (parens[i] === "(") {
			counter++;
		} else {
			counter--;
		}
		if (counter < 0) {
			return false;
		}
	}

	if (counter === 0) {
		return true;

	} else {
		return false;
	}
}


validParentheses("()"); // true
validParentheses(")(()))"); // false
validParentheses("("); // false
validParentheses("(())((()())())"); // true
