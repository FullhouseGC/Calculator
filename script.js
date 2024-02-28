let firstNumber;
let operator;
let secondNumber;
let displayValue = document.getElementById("display");
let equal = document.getElementById("equal");
let result = "A";

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
    switch (operator){
        case "+": firstNumber = operators.add(firstNumber, secondNumber);
        break;
        case "-": firstNumber = operators.substract(firstNumber, secondNumber);
        break;
        case "*": firstNumber = operators.multiply(firstNumber, secondNumber);
        break;
        case "/": if(secondNumber == 0){
        return displayValue.textContent = "You can't divivde by 0"
        } else{
            firstNumber = operators.divide(firstNumber, secondNumber)
        };
        break;
    }
    return firstNumber
}

function equalCal(){
    firstNumber = operate(firstNumber,operator,secondNumber)
    secondNumber = undefined;
    operator = undefined;
    displayValue.textContent = firstNumber;
}

function display(num){
    let pressedNum = document.getElementById("number" + num).innerHTML;
    parseInt(pressedNum)
    if(firstNumber == undefined && operator == undefined){
        firstNumber = pressedNum;
    } else if(operator == undefined){
        firstNumber += pressedNum
    }
    firstNumber = parseInt(firstNumber)
    displayValue.textContent = firstNumber;
    
    if(operator != undefined && secondNumber == undefined){
        secondNumber = pressedNum;
        secondNumber = parseInt(secondNumber)
        displayValue.textContent = secondNumber;
    } else if(operator != undefined){
        secondNumber += pressedNum;
        secondNumber = parseInt(secondNumber)
        displayValue.textContent = secondNumber;
    }
}

function displayOperator(num){
    let pressedOperator = document.getElementById("operator" + num).innerHTML;
    if(operator == undefined){
        operator = pressedOperator;
        displayValue.textContent = operator;
    } else if(operator != undefined){
        equalCal()
        operator = pressedOperator;
        displayValue.textContent = firstNumber;
    }
    //displayValue.textContent = operator
}

function clearCalculator(){
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    displayValue.textContent = 0;
}

