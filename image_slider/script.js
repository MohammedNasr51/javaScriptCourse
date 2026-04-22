const slides = document.querySelectorAll(".slide");
let index = 0;
let intervalId;
const prevBtn = document.getElementsByClassName("prev")[0];
const nextBtn = document.getElementsByClassName("next")[0];

//& init first slide after dom content loaded
document.addEventListener("DOMContentLoaded", init);

prevBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  prev();
});
nextBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  next();
});

function init() {
  if (slides.length > 0) slides[index].classList.add("active");
  intervalId = setInterval(next, 3000);
}

function showSlide() {
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}
function next() {
  index++;
  showSlide();
}
function prev() {
  index--;
  showSlide();
}
