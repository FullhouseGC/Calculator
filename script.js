let firstNumber;
let operator;
let secondNumber;
let displayValue;

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

/*let number = document.getElementsByClassName("number")
function display(){
    let resu = number[0].innerHTML
    return console.log(resu)
}*/

console.log(operate(1,"-",2))