const easyBtn = document.getElementById("easy");
const middleBtn = document.getElementById("middle");
const hardBtn = document.getElementById("hard");
const textContent = document.getElementById("textContent");
import { phrases } from "../data/phrases.js";

function handleLevel() {
  switch (this.id) {
    case "easy":
      textContent.textContent = phrases.easy[randomNbr(phrases.easy.length)];
      break;
    case "middle":
      textContent.textContent =
        phrases.middle[randomNbr(phrases.middle.length)];
      break;
    case "hard":
      textContent.textContent = phrases.hard[randomNbr(phrases.hard.length)];
      break;
  }
}

function randomNbr(phraseLength) {
  return Math.floor(Math.random() * phraseLength);
}

export function chooseLevel() {
  easyBtn.addEventListener("click", handleLevel);
  middleBtn.addEventListener("click", handleLevel);
  hardBtn.addEventListener("click", handleLevel);
}
