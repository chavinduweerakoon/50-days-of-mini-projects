const textString = document.getElementById("text");
const speedTag = document.getElementById("speed");
const text = "Sometimes this is not a quote about life advice";
let idx = 1;
let speed = 300 / speedTag.value;

showText();

function showText() {
  textString.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(showText, speed);
}

speedTag.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
