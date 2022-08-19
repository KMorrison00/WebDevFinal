// All general website functionality code 

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

const footerAd = document.querySelector('#footerAd')
footerAd.addEventListener('click', handleArticleClick)