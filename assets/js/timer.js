const chrono = document.getElementById("chrono");
const resetBtn = document.getElementById("reset");
const tapedText = document.getElementById("tapedText");
import { handleScore } from "./displayScore.js";

let timer;
let isRunning = false;
let milliSeconds = 0;
let seconds = 0;
let minutes = 0;

function setChrono() {
  chrono.textContent = `${String(minutes).padStart(2, "0")} : ${String(
    seconds,
  ).padStart(2, "0")} : ${String(milliSeconds).padStart(2, "0")}`;
}

function handleStartStop() {
  if (!isRunning) {
    timer = setInterval(() => {
      milliSeconds++;
      if (milliSeconds >= 100) {
        milliSeconds = 0;
        seconds++;
      } else if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      setChrono(seconds);
    }, 10);
    isRunning = true;
  }
}

export function handleReset() {
  clearInterval(timer);
  tapedText.value = "";
  milliSeconds = 0;
  seconds = 0;
  minutes = 0;
  isRunning = false;
  setChrono();
}
function onEnterPress(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    handleScore();
  }
}

export function initChrono() {
  resetBtn.addEventListener("click", handleReset);
  tapedText.addEventListener("keydown", handleStartStop);
  tapedText.addEventListener("focus", () => {
    document.addEventListener("keydown", onEnterPress);
  });

  tapedText.addEventListener("blur", () => {
    document.removeEventListener("keydown", onEnterPress);
  });
}
