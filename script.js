document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".link");
  // Function to toggle the navigation menu
  function toggleNavMenu() {
    navLinks.classList.toggle("active");
  }

  //Close buger menu when Nav links are clicked
  burgerMenu.addEventListener("click", toggleNavMenu);
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
