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
// slide change logic
function changeSlide(direction) {
    index = (index + direction + total) % total;
    updateSlide();
    resetAutoSlide();
}
// arrows
rightArrow.addEventListener("click", () => changeSlide(1));
leftArrow.addEventListener("click", () => changeSlide(-1));
// auto slide
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}
// start on load
startAutoSlide();
