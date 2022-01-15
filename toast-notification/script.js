const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const notifications = ["Demo 1", "Demo 2", "Demo 3", "Demo 4", "Demo 5"];
const types = ["info", "success", "danger"];

button.addEventListener("click", () => createNotification());

function createNotification(notification = null, type = null) {
  const notify = document.createElement("div");
  notify.classList.add("toast");
  notify.classList.add(type ? type : getRandomType());
  notify.innerText = notification ? notification : getRandomNotification();
  toasts.appendChild(notify);
  setTimeout(() => {
    notify.remove();
  }, 3000);
}

function getRandomNotification() {
  return notifications[Math.floor(Math.random() * notifications.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
