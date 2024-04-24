let input = document.querySelector("#input");
let ul = document.querySelector("#list");
let counter = document.querySelector("#counter");

input.addEventListener("keypress", (event) => {
  if (!input.value) {
    return;
  }

  if (event.key == "Enter") {
    let li = document.createElement("li");

    let task = document.createElement("span");
    task.classList.add("taskStyle");
    task.textContent = input.value;

    task.addEventListener("dblclick", function () {
      let inp = document.createElement("input");
      inp.value = task.textContent;
      task.textContent = "";

      inp.addEventListener("change", function () {
        let editTask = document.createElement("span");
        editTask.textContent = this.value;
        inp.remove();
        task.appendChild(editTask);
      });

      task.appendChild(inp);
    });

    li.appendChild(task);

    let done = document.createElement("span");
    done.classList.add("doneStyle");
    done.textContent = " Done ";

    done.addEventListener("click", () => {
      task.classList.add("done");
    });

    li.appendChild(done);

    let remove = document.createElement("span");
    remove.classList.add("remove");
    remove.textContent = " Remove ";

    remove.addEventListener("click", () => {
      li.remove();
      counter.textContent = ul.children.length;
    });
    li.appendChild(remove);

    ul.appendChild(li);

    input.value = "";
  }

  counter.textContent = ul.children.length;
});
