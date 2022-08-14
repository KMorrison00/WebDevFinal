
// get all the articles
const articleCards = Array.from(document.querySelectorAll(".article"));
// this will be nessecary for being able to select text without click an article
const isTextSelected = window.getSelection().toString();
// function for clicking an entire article while allowing text selection
//[1] C. Coyier, Block Links: The Search for a Perfect Solution May 25, 2020
// https://css-tricks.com/block-links-the-search-for-a-perfect-solution/#method-4-sprinkle-javascript-on-the-second-method
function handleArticleClick(event) {
    const isTextSelected = window.getSelection().toString();
    if (!isTextSelected) {
        event.currentTarget.querySelector('.embedLink').click()
    }
}

//   apply the click selector to all the articles
articleCards.forEach(function(element) {
    element.addEventListener('click', handleArticleClick);
});

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