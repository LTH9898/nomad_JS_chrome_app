// <⚠️ DONT DELETE THIS ⚠️>
//import "cal.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

let operandIsPressed = 0;
let pressed = 0;

function init() {
        buttons.forEach((button) => {
        button.addEventListener("click", () => {
        switch (button.dataset.type) {
          case "operator":
            const oper = button.innerText;
            operator(oper);
            break;
          case "ac":
            clear();
            break;
          case "equals":
            calc();
            break;
          default:
            const number = button.innerText;
            displayNumber(number);
            break;
        }
      });
    });
  }

let result = 0;
let lastClickedOperator;
function operator(text) {
    lastClickedOperator = text;
    operandIsPressed = 1;
    let firstNum = 0;
    if( text == "+")
    {
        result = result + parseInt(input.value);
        showResult();
    }
    else if (text == "*")
    {
        if(result == 0)
        {
            result = 1;
            result = result * parseInt(input.value);
        }
       else if(result !== 0)
       {
            result = result * parseInt(input.value);
            showResult();
       }
       console.log(result);
        
    }
    else if (text == "-")
    {
        if(result == 0)
        {
            result = parseInt(input.value);
            showResult();
        }
        else if(result !== 0){
            result = result - parseInt(input.value);
            showResult();
        }
    }
    else if (text == "/")
    {
        if(result == 0)
        {
            result = parseInt(input.value);
            showResult();
        }
        else if(result !== 0){
            result = result / parseInt(input.value);
            console.log(result);
            showResult();
        }
    }
    pressed = 0;

   
}

function calc()
{
    switch(lastClickedOperator) {
        case "+":
            result = result + parseInt(input.value);
            break;
        case "-":
            result = result - parseInt(input.value);
            break;
        case "*":
            result = result * parseInt(input.value);
            break;
        case "/":
            result = result / parseInt(input.value);
            break;
    }

    showResult();
    pressed = 0;
}

function showResult()
{
    input.value = result;
}

function initDisplay()
{

}

function displayNumber(text){
    
    if(operandIsPressed == 1)
    {
        if(pressed == 0)
        {
            input.value = text;
            pressed = 1;
        }
        
        else if (pressed === 1)
        {
            input.value = input.value + text;
        }
        
    }
        
    else if(operandIsPressed == 0)
    {
        if(input.value == 0)
        {
            input.value = text;
        }

        else if(input.value !== 0)
        {
            input.value = input.value + text;
        }
    }
}

  function clear(){
      input.value = 0;
      result = 0;
      operandIsPressed = 0;
  }
  
  init();