const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  toDoFList = document.getElementById("FINISHED"),
  toDoFList2 = document.querySelector(".js-toDoFList");

const TODOS_LS = "PENDING";
const TODOS_LS2 = "FINSIHED";


let toDos = [];
let finishedToDos = [];

function BackToDo(event){
  const checkBtn = document.createElement("button");
  console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  li.removeChild(btn);
  toDoList.appendChild(li);
  checkBtn.innerText = "✅";
  li.appendChild(checkBtn);
  checkBtn.addEventListener("click",finishToDo);
  const modifiedToDos = finishedToDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });

  const cleanToDos = finishedToDos.filter(function(toDo){
    return toDo.id === parseInt(li.id);
  });
  toDos.push(cleanToDos[0]);
  finishedToDos = modifiedToDos;
  saveFinishedToDos();
  saveToDos();


}

function finishToDo(event) {
  const backBtn = document.createElement("button");
  const btn = event.target;
  const li = btn.parentNode;
  li.removeChild(btn);
  toDoFList2.appendChild(li);
  backBtn.innerText = "⏪";
  li.appendChild(backBtn);
  backBtn.addEventListener("click", BackToDo);

  const modifiedToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id === parseInt(li.id);
  });
  finishedToDos.push(cleanToDos[0]);
  toDos = modifiedToDos;
  saveFinishedToDos();
  saveToDos();
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const whatToDelete = li.parentNode;
  whatToDelete.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  const cleanFToDos = finishedToDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  finishedToDos = cleanFToDos;
  saveToDos();
  saveFinishedToDos();
}


function deleteFToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoFList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  
}

function saveFinishedToDos(){
  localStorage.setItem(TODOS_LS2,JSON.stringify(finishedToDos));
}

let indexNum = 1;


function paintFinishToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button")
  const span = document.createElement("span");
  const newId = indexNum;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click",BackToDo);

  span.innerText = text;
  
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  li.id = newId;
  toDoFList2.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  finishedToDos.push(toDoObj);
  saveFinishedToDos();
  indexNum +=1;
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button")
  const span = document.createElement("span");
  const newId = indexNum;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  checkBtn.innerText = "✅";
  checkBtn.addEventListener("click",finishToDo);

  span.innerText = text;
 
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
  indexNum +=1;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const loadedFinishedToDos = localStorage.getItem(TODOS_LS2);
  if(loadedFinishedToDos !== null)
  {
    const parsedFinishedToDos = JSON.parse(loadedFinishedToDos);
    parsedFinishedToDos.forEach(function(toDo){
      paintFinishToDo(toDo.text);
    });
  }
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}


function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();