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


function display(num){
    let currentNum = document.getElementById("number" + num).innerHTML;
    if(firstNumber == undefined){
        firstNumber = currentNum;
    } else{
        firstNumber += currentNum
    }
    displayValue.textContent = firstNumber;
}