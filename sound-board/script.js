const sounds = ["applause", "boo", "gasp", "victory"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = sound;

  //on click
  btn.addEventListener("click", () => {
    stopCurrentPlaying();
    document.getElementById(sound).play();
  });

  //append to conatiner class
  document.getElementById("buttons").appendChild(btn);
});

function stopCurrentPlaying() {
  sounds.forEach((sound) => {
    const track = document.getElementById(sound);
    track.pause();
    track.currentTime = 0;
  });
}
