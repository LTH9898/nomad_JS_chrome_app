const title = document.querySelector("#bodytitle");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}




function init() {
   // title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();
