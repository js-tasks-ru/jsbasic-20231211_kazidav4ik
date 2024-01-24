function initCarousel() {
  const carouselInner = document.querySelector(".carousel__inner");
  const carouselArrows = document.querySelectorAll(".carousel__arrow");
  const carouselArrowLeft = document.querySelector(".carousel__arrow_left");
  const carouselArrowRight = document.querySelector(".carousel__arrow_right");
  const slideWidth = carouselInner.offsetWidth;
  const slideNumber = 4;
  let currentSlide = 0;
  function updateArrows() {
    carouselArrowLeft.style.display = currentSlide === 0 ? "none" : "";
    carouselArrowRight.style.display =
      currentSlide === slideNumber - 1 ? "none" : "";
  }
  function moveCarousel() {
    carouselInner.style.transform = `translateX(-${
      currentSlide * slideWidth
    }px)`;
  }
  carouselArrows.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      if (event.target === carouselArrowLeft) {
        currentSlide--;
      } else if (event.target === carouselArrowRight) {
        currentSlide++;
      }
      moveCarousel();
      updateArrows();
    });
  });
  updateArrows();
}
