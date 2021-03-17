// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const rangeValue = document.getElementById("randomRange");
const rangeEndNum = document.getElementById("rangeEnd");
const guessNum = document.getElementById("guessText");

rangeEndNum.innerHTML = rangeValue.value;

rangeValue.oninput = function(){
    rangeEndNum.innerHTML = this.value;
    
}

const playButton = document.querySelector("button");
let randomNumber = 0;
function RandomMaker(){
    
    randomNumber = Math.floor(Math.random() * rangeValue.value);
    if(randomNumber === 0)
    {
        randomNumber = 1;
    }
    return randomNumber;
}


function createResult(){
    const playResult = document.getElementById("playResult");
    const baseText = document.getElementById("youChose");
    const choseResult = document.getElementById("Pchosen");
    const winLoseText = document.getElementById("WorL");
    RandomMaker();
    baseText.innerText = `You Chose : ${guessNum.value}, the machine chose : ${randomNumber}`;
    console.log(guessNum.value);
    console.log(randomNumber);
    if(parseInt(guessNum.value) == randomNumber)
    {
        winLoseText.innerText = "You Win!";
    }
    if(parseInt(guessNum.value) !== randomNumber)
    {
        winLoseText.innerText = "You LOSE!";
    }
}


function playClicked(event)
{
    console.log(guessNum.value); 
    createResult();
}


playButton.addEventListener("click", playClicked);