const slides = document.querySelectorAll(".slide");

const slidesPlugin = (acliveSlide) => {
  slides[acliveSlide].classList.add("active");

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  });

  const clearActiveClasses = () => {
    slides.forEach((slide) => slide.classList.remove("active"));
  };
};

slidesPlugin(1);
