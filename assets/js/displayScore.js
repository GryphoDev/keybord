const chrono = document.getElementById("chrono");
const table = document.getElementById("table");
const tapedText = document.getElementById("tapedText");
import { handleReset } from "./timer.js";

export function handleScore() {
  const charactere = tapedText.value.length;
  const timer = chrono.textContent;
  const cpm = CPM(charactere, timer);

  table.innerHTML += ` <tr>
  <td class="border border-black px-2">${charactere} caractères</td>
  <td class="border border-black px-2">${isNaN(cpm) || cpm === "Infinity" ? "Calcul impossible" : cpm}</td>
  <td class="border border-black px-2">${timer}</td>
  </tr>`;
  handleReset();
}

function CPM(charactere, timer) {
  const [minutes, secondes] = timer.split(":").map(Number);
  const timeInSeconds = minutes * 60 + secondes;
  const cpm = charactere / (timeInSeconds / 60);
  return cpm.toFixed(2);
}
