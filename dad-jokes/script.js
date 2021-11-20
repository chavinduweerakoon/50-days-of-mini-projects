// API used - https://icanhazdadjoke.com/api

const theJoke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => {
      theJoke.innerHTML = data.joke;
    });
}
