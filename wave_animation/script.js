const labels = document.querySelectorAll(".login-form label");

console.log(labels.length);

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span class="login-form__letter" style="transition-delay:${
          index * 50
        }ms">${letter}</span>`
    )
    .join("");
});
