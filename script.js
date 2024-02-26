let firstNumber;
let operator;
let secondNumber;
let displayValue = document.getElementById("display");

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

function operate(a,operator,b){
    switch (true){
        case operator == "+": return operators.add(a, b);
        case operator == "-": return operators.substract(a, b);
        case operator == "*": return operators.multiply(a, b);
        case operator == "/": return operators.divide(a, b);
    }
}


//Put the numbers in an array, split it with an operator, and then combine both numbers and use operator???

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
    } else if(operator != undefined){
        secondNumber += pressedNum;
    }
}

function displayOperator(num){
    let pressedOperator = document.getElementById("operator" + num).innerHTML;
    if(operator == undefined){
        operator = pressedOperator;
    }
    displayValue.textContent = operator
}
