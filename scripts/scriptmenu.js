document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menuBars = document.querySelectorAll(".bar");
  const sideMenu = document.getElementById("side-menu");
  const body = document.body; // Seleciona o elemento body
  let menuOpen = false;

  menuIcon.addEventListener("click", () => {
    if (!menuOpen) {
      menuIcon.classList.add("menu-open");
      menuBars.forEach((bar, index) => {
        bar.style.transitionDelay = `${index * 0.1}s`;
        bar.style.transform = `rotate(-45deg) translate(-5px, 6px)`;
      });

      // Torna o side menu visível
      sideMenu.classList.add("visible");

      // Impede o scroll da página
      body.style.overflow = "hidden";
    } else {
      menuIcon.classList.remove("menu-open");
      menuBars.forEach((bar, index) => {
        bar.style.transitionDelay = "0s";
        bar.style.transform = "none";
      });

      // Oculta o side menu
      sideMenu.classList.remove("visible");

      // Restaura o scroll da página
      body.style.overflow = "auto";
    }

    menuOpen = !menuOpen;
  });
});
