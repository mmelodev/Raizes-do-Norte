const toggleButton = document.querySelector(".toggle-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

//--------

document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dot");
  const mobileSlides = document.querySelectorAll(".img-slider.mobile-only");
  const desktopSlides = document.querySelectorAll(".img-slider.desktop-only");
  let currentIndex = 0;
  let slideInterval;

  function getActiveSlides() {
    return window.innerWidth >= 1024 ? desktopSlides : mobileSlides;
  }

  function showSlide(index) {
    // Remove todas as classes active primeiro
    document.querySelectorAll(".img-slider").forEach((img) => {
      img.classList.remove("active");
    });

    // Ativa o slide correto
    const slides = getActiveSlides();
    if (slides[index]) {
      slides[index].classList.add("active");
    }

    // Atualiza os dots
    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[index]) {
      dots[index].classList.add("active");
    }

    currentIndex = index;
  }

  function nextSlide() {
    const slides = getActiveSlides();
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Inicia o slider
  function startSlider() {
    clearInterval(slideInterval);
    showSlide(0);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Controle por dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval);
      showSlide(parseInt(dot.dataset.index));
      slideInterval = setInterval(nextSlide, 5000);
    });
  });

  // Redimensionamento
  window.addEventListener("resize", () => {
    showSlide(currentIndex);
  });

  startSlider();
});
