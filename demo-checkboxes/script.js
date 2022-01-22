const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(selected) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === selected) {
      fast.checked = false;
    }
    if (cheap === selected) {
      good.checked = false;
    }
    if (fast === selected) {
      cheap.checked = false;
    }
  }
}
