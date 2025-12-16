const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide .image");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
let index = 0;
const total = images.length;
let autoSlideInterval;
function updateSlide() {
    slide.style.transform = `translateX(-${index * 100}%)`;
}

function changeSlide(direction) {
    index = (index + direction + total) % total;
    updateSlide();
    resetAutoSlide();
}

rightArrow.addEventListener("click", () => changeSlide(1));
leftArrow.addEventListener("click", () => changeSlide(-1));

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}
startAutoSlide();

const newsCards = document.querySelectorAll(
  ".todaynews .news-card, .todaynews .side-card"
);
let activeIndex = 0;
function activateNews(index) {
  newsCards.forEach(card => card.classList.remove("active"));
  newsCards[index].classList.add("active");
}
setInterval(() => {
  activeIndex = (activeIndex + 1) % newsCards.length;
  activateNews(activeIndex);
}, 4000);
newsCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    newsCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});

