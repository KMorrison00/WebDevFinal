// All code related to the Carousel object on the index page

// Select all slides
const slides = document.querySelectorAll(".slide");
// allow clicking on embbedded links
let slideLinks = Array.from(slides);
slideLinks.forEach(function(element) {
    element.addEventListener('click', handleArticleClick);
});

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;
// select next slide button
const fwdArrow = document.querySelector(".btn-fwd");
// select prev slide button
const backArrow = document.querySelector(".btn-back");


// add event listener and navigation functionality
fwdArrow.addEventListener("click", carouselRightArrow);
backArrow.addEventListener("click", carouselLeftArrow);

// functions for the left and right buttons on the carousel
function carouselRightArrow() {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
  
    //   move slide by -100% (1 slide left)
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
}

function carouselLeftArrow() {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
  
    //   move slide by 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
}

// have the carousel automatically change photos every 5 seconds
setInterval(carouselRightArrow, 5000);