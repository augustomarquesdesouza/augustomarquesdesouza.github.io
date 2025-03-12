let changeIcon = function (icon) {
  icon.classList.toggle("bi-x");
};

//Animação ao scroll
function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowsMetade = window.innerHeight * 0.75;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowsMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      }
    });
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}

initAnimaScroll();
//Animação Máquina de escrever
new TypeIt("#element", {
    speed: 60,
}).go();