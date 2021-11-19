const labels = document.querySelectorAll(".form-control label");

//each letter to a span
labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map((letter, index) => `<span>${letter}</span>`)
    .join("");
});
