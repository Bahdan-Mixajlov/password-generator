const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const numsEl = document.getElementById("nums");
const symbolsEl = document.getElementById("symbols");
const generateButton = document.getElementById("generate");

function getRandomNum() {
  const num = Math.random() * 10;
  return Math.floor(num).toString();
}

function getRandomSym() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  const randomSymbol = Math.floor(Math.random() * symbols.length);
  return symbols[randomSymbol];
}

function getRandomLower() {
  const lower = Math.floor(Math.random() * 25) + 97;
  return String.fromCharCode(lower);
}

function getRandomUpper() {
  const upper = Math.floor(Math.random() * 25) + 65;
  return String.fromCharCode(upper);
}

function generatePassword(
  randomNum,
  randomLower,
  randomUpper,
  randomSym,
  length
) {
  let generatedPassword = "";

  const activeFunctions = [];

  if (randomNum) activeFunctions.push(getRandomNum);
  if (randomLower) activeFunctions.push(getRandomLower);
  if (randomUpper) activeFunctions.push(getRandomUpper);
  if (randomSym) activeFunctions.push(getRandomSym);

  if (activeFunctions.length == 0) {
    return "";
  }

  for (i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * activeFunctions.length);
    const randomFunc = activeFunctions[randomIndex];
    generatedPassword += randomFunc();
  }

  return generatedPassword;
}

generateButton.addEventListener("click", () => {
  const length = +lengthEl.value;
  const lower = true;
  const upper = true;
  const num = numsEl.checked;
  const sym = symbolsEl.checked;

  resultEl.innerText = generatePassword(num, lower, upper, sym, length);
});
