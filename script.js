let firstNumber;
let operator;
let secondNumber;
let displayValue = document.getElementById("display");
let equal = document.getElementById("equal");
let result;

//Operators
const operators = {
    add(a,b){
        return a+b;
    },
    substract(a,b){
        return a-b;
    },
    multiply(a,b){
        return a*b;
    },
    divide(a,b){
        return a/b;
    }
}

//Function that does the operating
function operate(firstNumber,operator,secondNumber){
    switch (true){
        case operator == "+": return displayValue.textContent = operators.add(firstNumber, secondNumber);
        case operator == "-": return displayValue.textContent = operators.substract(firstNumber, secondNumber);
        case operator == "*": return displayValue.textContent = operators.multiply(firstNumber, secondNumber);
        case operator == "/": return displayValue.textContent = operators.divide(firstNumber, secondNumber);
    }
}

function display(num){
    let pressedNum = document.getElementById("number" + num).innerHTML;
    if(firstNumber == undefined && operator == undefined){
        firstNumber = pressedNum;
    } else if(operator == undefined){
        firstNumber += pressedNum
    }
    displayValue.textContent = firstNumber;
    
    if(operator != undefined && secondNumber == undefined){
        secondNumber = pressedNum;
        displayValue.textContent = secondNumber;
    } else if(operator != undefined){
        secondNumber += pressedNum;
        displayValue.textContent = secondNumber;
    }
}

function displayOperator(num){
    let pressedOperator = document.getElementById("operator" + num).innerHTML;
    if(operator == undefined){
        operator = pressedOperator;
    }
    displayValue.textContent = operator
}

function clearCalculator(){
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    displayValue.textContent = 0;
}