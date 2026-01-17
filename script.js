const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const numsEl = document.getElementById("nums");
const symbolsEl = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const themeToggle = document.getElementById("theme-toggle");
const copyButton = document.getElementById("copy-button");
const passwordText = document.getElementById("password-text");
const hiddenText = document.getElementById("hidden-text");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const lengthContainer = document.getElementById("length-container");

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
  const lower = lowerCase.checked;
  const upper = upperCase.checked;
  const num = numsEl.checked;
  const sym = symbolsEl.checked;

  passwordText.innerText = generatePassword(num, lower, upper, sym, length);
});

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.setAttribute("fill", "black");
    copyButton.setAttribute("fill", "black");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.setAttribute("fill", "white");
    copyButton.setAttribute("fill", "white");
    localStorage.setItem("theme", "dark");
  }
});

const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
}

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordText.innerText);
  hiddenText.classList.add('show');
  setTimeout(() => {
    hiddenText.classList.remove('show');
  },1000
)});

lengthEl.addEventListener("input", () =>{
  lengthContainer.innerText = lengthEl.value;
});