window.addEventListener('load', () => {
  const form = document.getElementById('task-form');
  let formInput = document.getElementById('task-input');
  const taskSection = document.querySelector('.tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formInput.value == '') {
      alert("please enter a new task!");
    }
    else {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task")
      taskSection.appendChild(taskDiv);

      const input = document.createElement("input");
      input.type = "text";
      input.setAttribute("readonly", "readonly");
      input.classList.add("task-content");
      input.value = formInput.value;

      taskDiv.appendChild(input);

      const editDeleteBtns = document.createElement("div");
      editDeleteBtns.classList.add("edit-delete-btns");
      taskSection.appendChild(editDeleteBtns);

      const editBtn = document.createElement("button");
      editBtn.classList.add("edit");
      editBtn.innerText = "Edit";

      editDeleteBtns.appendChild(editBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete");
      deleteBtn.innerText = "Delete"

      editDeleteBtns.appendChild(deleteBtn);


      editBtn.addEventListener('click', () => {
        if (editBtn.innerText.toLowerCase() == "edit") {
          input.removeAttribute("readonly");
          input.focus();
          editBtn.innerText = "Save";
        } else {
          input.setAttribute("readonly", "readonly");
          editBtn.innerText = "Edit";
        }

      });

      deleteBtn.addEventListener('click', () => {
        taskDiv.removeChild(input);
        editDeleteBtns.removeChild(editBtn);
        editDeleteBtns.removeChild(deleteBtn);
      })


    };

  })
})
