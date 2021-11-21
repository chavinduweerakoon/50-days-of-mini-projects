const insert = document.getElementById("insert");

//key listener
window.addEventListener("keydown", (event) => {
  insert.innerHTML = `<div class="key">
    ${event.key === " " ? "Space" : event.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>`;
});
window.addEventListener("keydown", (e) => {
  console.log(e);
});
