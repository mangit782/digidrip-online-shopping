document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
      slide.style.zIndex = i === index ? '10' : '0';
    });
    currentIndex = index;
  }

  function showNextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function showPrevSlide() {
    let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  prevBtn.addEventListener('click', () => {
    showPrevSlide();
    resetInterval();
  });

  nextBtn.addEventListener('click', () => {
    showNextSlide();
    resetInterval();
  });

  function startInterval() {
    slideInterval = setInterval(showNextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  showSlide(currentIndex);
  startInterval();
});
