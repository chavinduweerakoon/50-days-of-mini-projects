const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener("click", () => {
  const length = lengthEl.ariaValueMax;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typreArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return "";
  }
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(math.random() * 26) + 97);
}
//97-lowercase character/65-upper -ref - https://www.w3schools.com/charsets/ref_html_ascii.asp

function getRandomUpper() {
  return String.fromCharCode(Math.floor(math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%{}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
