const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar__link");

/*console.log(window.pageYOffset, navbarOffsetTop);*/

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    /*console.log(window.pageYOffset, navbarOffsetTop);*/
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((link) => {
        link.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });
});
