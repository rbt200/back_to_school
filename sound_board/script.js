const sounds = ["melody_1", "melody_2", "melody_6", "melody_7", "melody_8"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  const stopBtn = document.getElementById("stop");
  btn.classList.add("btn");

  btn.innerText = sound;

  document.getElementById("buttons").appendChild(btn);

  btn.addEventListener("click", () => {
    stopSounds();
    const current = document.getElementById(sound);

    current.play();
  });

  stopBtn.addEventListener("click", () => {
    stopSounds();
  });
});

function stopSounds() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
