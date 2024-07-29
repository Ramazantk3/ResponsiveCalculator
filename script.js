const mulButton = document.querySelector(".mul");
const divButton = document.querySelector(".div");  //This is the class with the name of div(shortcut of division operation), not the div container tag in html
const subButton = document.querySelector(".sub");
const addButton = document.querySelector(".add");
const clearButton = document.querySelector(".clear");
const displayOperation = document.querySelector(".operation");

let displayMainNumber = document.querySelector(".mainNumber");
let displayPreviousNumber = document.querySelector(".previousNumber");

let operation = "";
let previousNumber, currentNumber;
let ans = 0;

mulButton.onclick = () => {
    if(operation !=="ans"){
    operation = "x"; 
    }
    displayOperation.innerHTML = "x";
    PassNumber(ans);
    operation = "x"; 
   
}

divButton.onclick = () => {
    if(operation !=="ans"){
    operation = "÷"; 
    }
    displayOperation.innerHTML = "÷";
    PassNumber(ans); 
    operation = "÷"; 
}

subButton.onclick = () => {
    if(operation !=="ans"){
    operation = "-";  
    }
    displayOperation.innerHTML = "-";
    PassNumber(ans);
    operation = "-"; 
}

addButton.onclick = () => {
    if(operation !=="ans"){
    operation = "+";
    }
    displayOperation.innerHTML = "+";
    PassNumber(ans); 
    operation = "+";
}


DisplayMainNumberEditor = (number) => {
    if(displayMainNumber.innerHTML === '0' || operation ==="ans") displayMainNumber.innerHTML = "";
    if(operation ==="ans") operation="";
    displayMainNumber.innerHTML +=`${number}`};

ResultFinder = () =>{
    currentNumber = Number(displayMainNumber.innerHTML);
    if(operation ==='x'){ ans = Multiplication(previousNumber,currentNumber);

    }else if (operation ==='÷'){ ans= Division(previousNumber,currentNumber);

    }else if (operation ==='-'){ ans= Substraction(previousNumber,currentNumber);

    }else if (operation ==='+'){ ans= Addition(previousNumber,currentNumber);
    }
    ResultDisplayer(ans);
    operation = "ans";
}


ResultDisplayer = (ans) =>{
    displayPreviousNumber.innerHTML = "";
    displayOperation.innerHTML = "";
    displayMainNumber.innerHTML = "Ans=" + ans.toString();
}


PassNumber = (ans) => {
    //This if section is to prevent "Ans=" from passing to displayPreviousNumber string from displayMainNumber.
     if(operation === "ans"){
        displayPreviousNumber.innerHTML = ans;
        previousNumber = Number(ans);
        displayMainNumber.innerHTML = "0";
        return;
    }
    displayPreviousNumber.innerHTML = displayMainNumber.innerHTML;
    displayMainNumber.innerHTML ="0";
    previousNumber = Number(displayPreviousNumber.innerHTML);
}

Clear = () => {
    displayMainNumber.innerHTML = "0"
    displayPreviousNumber.innerHTML = "";
    displayOperation.innerHTML ="";
}

Multiplication = (previousNumber, currentNumber) => {
    let ans = previousNumber * currentNumber;
    return ans;
}

Division = (previousNumber, currentNumber) => {
    let ans = previousNumber * (1/currentNumber);
    return ans;
}

Substraction = (previousNumber, currentNumber) => {
    let ans = previousNumber - currentNumber;
    return ans;
}

Addition = (previousNumber, currentNumber) => {
    let ans = previousNumber + currentNumber;
    return ans;
}