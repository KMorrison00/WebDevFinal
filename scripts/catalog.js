// all code related to the image display on the catalog page

// get all the filters and catalog items
const filters = Array.from(document.querySelectorAll(".filter"));
const showAll = document.querySelector('#showAll');
const items = Array.from(document.querySelectorAll(".catalogItem"));

filters.forEach(function(element) {
    // feed the callback function through an anonomous one to allow parameter passing
    // and pass it the element so we know what we've clicked/filtered
    element.addEventListener('change', function(event){filterCatalog(event.target)})
});

function filterCatalog(elem) {
    // get the root prefix to know what we're filtering
    let prefix = elem.id.split('Filter')[0];
    // if any filter is checked we need to uncheck the "Show All" checkbox
    // since we're no longer showing all items
    if (elem.checked) {
        showAll.checked = false
    }

    items.forEach(function(item) {
        if(item.classList.contains(`${prefix}Image`) && elem.checked) {
            // filter has been selected so mark it to be displayed
            item.setAttribute("displayed", "true");
        } else if (item.classList.contains(`${prefix}Image`)) {
            // in this case, the checkbox was unmarked so remove the 
            // mark for being displayed
            item.removeAttribute("displayed");
        }
        // now that we've determined which elements should be displayed
        // hide the rest
        // make only filtered items visible in the catalog
        if (!item.hasAttribute("displayed")) {
            item.style.display = 'none'
        } else {
            item.style.display = 'block'
        }
    })
}

function showHideAll(elem) {
    // we want to display everything if the box was checked, otherwise do nothing
    if (elem.checked) {
        // first we uncheck all the filters
        filters.forEach(function(element) {
            element.querySelector('input').checked = false;
        })

        // then unhide all the catalog items and reset displayed property
        items.forEach(function(item) {
            item.style.display = 'block'
            item.removeAttribute("displayed");
        })
    }
}
// tie the change event to the show all checkbox
showAll.addEventListener('change', function(event){showHideAll(event.target)})