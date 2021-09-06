const icons = document.querySelectorAll(".section-1-icons i");
let pos = 0;

setInterval(() => {
  icons[pos].classList.remove("change");

  if (pos === icons.length - 1) {
    pos = 0;
  } else {
    ++pos;
  }
  icons[pos].classList.add("change");
}, 3000);
