// <⚠️ DONT DELETE THIS ⚠️>

const colors = [
  "#ffffff",
  "#1abc9c",
  "#3498db",
  "#9b59b6",
  "#f39c12",
  "#e74c3c"
];
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
const title = document.querySelector("h2");
function init() {
    title.style.color = colors[0];
    body.style.backgroundColor = colors[3];
}

init();

const superEventHandler = {
  onResizeHandler: function onResizeHandler(event) {
    if (window.innerWidth > 1000) {
      body.style.backgroundColor = colors[4];
    } else if (window.innerWidth < 700) {
      body.style.backgroundColor = colors[2];
    } else {
      body.style.backgroundColor = colors[3];
    }
  }
};

window.addEventListener("resize", superEventHandler.onResizeHandler);
