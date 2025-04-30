const toggleButton = document.querySelector(".toggle-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

const slides = document.querySelectorAll(".img-slider");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let interval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function startCarousel() {
  interval = setInterval(nextSlide, 3000);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index);
    showSlide(index);
    clearInterval(interval); 
    startCarousel();
  });
});

showSlide(currentIndex);
startCarousel();
