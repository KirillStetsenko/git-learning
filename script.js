let tasks = ["clean my room", "learning", "walking"];

let list = document.querySelector("#list");

for (let task of tasks) {
  let li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);
}
