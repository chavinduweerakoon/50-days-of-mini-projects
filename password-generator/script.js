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
