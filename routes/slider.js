document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const dotsContainer = document.querySelector(".dots-container");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;

  function createDots() {
    for (let i = 0; i < slider.children.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", function () {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }
    updateDots();
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    const translateValue = -index * 100 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
    updateDots();
  }

  function nextSlide() {
    if (currentIndex < slider.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    goToSlide(currentIndex);
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slider.children.length - 1;
    }
    goToSlide(currentIndex);
  }

  createDots();
  setInterval(nextSlide, 5000); // Auto slide every 5 seconds

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
});
