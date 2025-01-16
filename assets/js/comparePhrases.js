const textContent = document.getElementById("textContent");
const tapedText = document.getElementById("tapedText");

function cleanPrases(phrase) {
  const phraseSplit = phrase.split(" ");
  const cleanWords = phraseSplit.filter(
    (word) => word.trim() !== "" && !/[\r\n]+/.test(word),
  );
  return cleanWords;
}

export function checkSpace(text) {
  let checkedSpaceText = text.replace(/([.,;?!])([^\s])/g, "$1 $2");
  return checkedSpaceText;
}

export function comparePhrases() {
  const checkedSpaceOrigin = checkSpace(textContent.textContent);
  const checkedSpaceUser = checkSpace(tapedText.value);

  const originalText = cleanPrases(checkedSpaceOrigin);
  const userText = cleanPrases(checkedSpaceUser);
  let errors = [];

  for (let i = 0; i < originalText.length; i++) {
    if (originalText[i] !== userText[i]) {
      errors.push({ original: originalText[i], user: userText[i] });
    }
  }
  return errors;
}
