const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

const dragstart = (e) => {
  e.target.classList.add("hold");
  setTimeout(() => {
    e.target.classList.add("hidden");
  });
};

const dragend = (e) => {
  e.target.classList.remove("hold", "hidden");
};

const dragover = (e) => {
  e.preventDefault();
};

const dragenter = (e) => {
  e.target.classList.add("hovered");
};

const dragleave = (e) => {
  e.target.classList.remove("hovered");
};

const drop = (e) => {
  e.target.classList.remove("hovered");
  e.target.append(item);
};

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", drop);
});
