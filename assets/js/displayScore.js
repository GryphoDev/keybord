const chrono = document.getElementById("chrono");
const table = document.getElementById("table");
const tapedText = document.getElementById("tapedText");
const textContent = document.getElementById("textContent");
import { handleReset } from "./timer.js";
import { comparePhrases } from "./comparePhrases.js";

function showErrors(errors) {
  if (errors.length != 0) {
    let errorText = `Tu as fais ${errors.length} fautes.<br>`;
    for (let index = 0; index < errors.length; index++) {
      errorText += `Faute ${index + 1} : Tu as écris <span class="text-red-500">"${errors[index].user}"</span> à la place de <span class="font-bold">"${errors[index].original}"</span><br>`;
    }
    textContent.innerHTML = errorText;
  }
}

export function handleScore() {
  const charactere = tapedText.value.length;
  const timer = chrono.textContent;
  const cpm = CPM(charactere, timer);
  const errors = comparePhrases();
  showErrors(errors);

  table.innerHTML += ` <tr>
  <td class="border border-black px-2">${errors.length} erreurs</td>
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
