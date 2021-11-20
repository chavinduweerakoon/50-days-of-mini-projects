// API used - https://icanhazdadjoke.com/api

const theJoke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((response) => response.json())
//     .then((data) => {
//       theJoke.innerHTML = data.joke;
//     });
// }

// with async await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  theJoke.innerHTML = data.joke;
}
