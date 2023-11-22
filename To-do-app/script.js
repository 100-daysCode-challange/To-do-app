const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function createTask() {
  if (inputBox.value === "") {
    alert("Please create a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = `<i class="material-icons">close</i>`;
    li.appendChild(span);
  }
  inputBox.value = "";
  addToLocalStorage();
}
ListContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    addToLocalStorage();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    addToLocalStorage();
  }
}, false);


function addToLocalStorage() {
    localStorage.setItem("tasks", ListContainer.innerHTML);
}

function getFomLocalSTorage(){
    ListContainer.innerHTML = localStorage.getItem("tasks")
}
getFomLocalSTorage();