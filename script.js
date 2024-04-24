let list = document.querySelector("#list");
let input = document.querySelector("#addInput");
let add = document.querySelector("#addButton");

add.addEventListener("click", () => {
  let task = document.createElement("li");
  let del = document.createElement("button");

  task.innerHTML = input.value;
  del.textContent = "Delete";

  del.addEventListener("click", () => {
    task.remove();
  });

  list.appendChild(task);
  task.appendChild(del);
  input.value = "";
});
