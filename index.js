const title = document.querySelector("#bodytitle");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className;
    console.log(currentClass);
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}


function init() {
   // title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();


function handleOffline()
{
    console.log("offline");
}


window.addEventListener("offline", handleOffline);

function handleOnline()
{
    console.log("online");
}

window.addEventListener("online", handleOnline);