const addBtn = document.querySelector(".add");

function addNewNote() {
  const note = document.createElement("div");
  note.classList.add("notes");

  note.innerHTML = ` <div class="tools">
    <button class='tool-btn edit'><i class="fas fa-edit"></i></button>
    <button class='tool-btn delete'><i class="fas fa-trash"></i></button>
    </div>
    <div class="wrapper">
    </div>

    <textarea class='hidden' name="note" id="note" ></textarea>`;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");

  const wrappper = note.querySelector(".wrapper");
  const textArea = note.querySelector("textarea");

  editBtn.addEventListener("click", () => {
    wrappper.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    wrappper.innerHTML = marked(value);
  });
  deleteBtn.addEventListener("click", (e) => {
    const { target } = e;
    const theNote = target.closest(".notes");
    theNote.remove();
  });

  document.body.appendChild(note);
}

addBtn.addEventListener("click", () => addNewNote());
