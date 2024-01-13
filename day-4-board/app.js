const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const colors = [
  "orange",
  "lightblue",
  "forestgreen",
  "purple",
  "darkcyan",
  "aqua",
  "brown",
  "crimson",
];

const getRandomColor = () => {
  const idx = Math.floor(Math.random() * colors.length);
  return colors[idx];
};

const setColor = (el) => {
  const color = getRandomColor();

  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (el) => {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = `0 0 2px #000`;
};

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");

  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}
