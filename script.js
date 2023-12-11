const notesContainer = document.querySelector(".notes-container");
const addBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
getNotes();

addBtn.addEventListener("click", () => {
  let newNote = document.createElement("p");
  let newImg = document.createElement("img");
  newNote.classList.add("input-box");
  newNote.setAttribute("contenteditable", "true");
  newImg.src = "images/delete.png";
  notesContainer.appendChild(newNote).appendChild(newImg);
  saveNotes();
});
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveNotes();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.onkeyup = () => {
        saveNotes();
      };
    });
  }
});
function saveNotes() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
function getNotes() {
  if (localStorage.getItem("notes")) {
    notesContainer.innerHTML = localStorage.getItem("notes");
  }
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
