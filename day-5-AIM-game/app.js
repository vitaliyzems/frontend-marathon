const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
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

let time = 0;
let score = 0;

const getRandomColor = () => {
  const idx = Math.floor(Math.random() * colors.length);
  return colors[idx];
};

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const createRandomCircle = () => {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = getRandomColor();

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.backgroundColor = color;

  board.append(circle);
};

const finishGame = () => {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
};

const setTime = (value) => {
  if (value > 59) {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    if (seconds < 10) {
      timeEl.innerHTML = `0${minutes}:0${seconds}`;
    } else {
      timeEl.innerHTML = `0${minutes}:${seconds}`;
    }
  } else {
    timeEl.innerHTML = `00:${value}`;
  }
};

const decreaseTime = () => {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;

    if (current > 59) {
      console.log(current);
    }

    if (current < 10) {
      current = `0${time}`;
    }

    setTime(current);
  }
};

const startGame = () => {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
};

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("time-btn")) {
    return;
  }

  time = +event.target.dataset.time;

  screens[1].classList.add("up");

  startGame();
});

board.addEventListener("click", (event) => {
  if (!event.target.classList.contains("circle")) {
    return;
  }
  score++;
  event.target.remove();
  createRandomCircle();
});
