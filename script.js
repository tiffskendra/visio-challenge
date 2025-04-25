const slides = document.querySelectorAll('.hero img');
const nextBtn = document.getElementById('nextBtn');
let current = 0;

// Function to show the next slide
function showNextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

// Click arrow to go to next slide manually
nextBtn.addEventListener('click', showNextSlide);

// Auto-play every 5 seconds (5000 ms)
setInterval(showNextSlide, 5000);