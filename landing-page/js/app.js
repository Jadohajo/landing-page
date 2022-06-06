/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//Navigation bar
const sectionHeading = document.querySelectorAll("[data-nav]");

//menu
const navigation = document.getElementsByClassName("menu__link");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//Is the element in the viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//highlight the last clicked nav item
function highlightNavItem(e) {
    const navItem = document.querySelectorAll("[data-nav]");
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.remove("active");
    }
    e.target.classList.add("active");
}


//array of html elements
function createArrayOfElements(elements) {
    const array = [];
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i]);
    }
    return array;
}

// build the nav

for (let heading of sectionHeading) {
    //Define nav bar ul
    const navList = document.getElementById("navbar__list");
    //For each sections data-nav attribute create a li
    const newLi = document.createElement("li");
    //Add the text content of the data-nav as the heading
    let text = heading.getAttribute("data-nav"); 
    newLi.textContent = text;
    //Add attribute for styling
    newLi.setAttribute("class", "menu__link");
    //Append to the ul
    navList.appendChild(newLi);
}

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", function(){
    for (let section of sectionHeading) {
        if (isSectionInViewport(section) === true) {
            section.setAttribute("class", "your-active-class");
        } else {
            section.removeAttribute("class");
        }
    }
})


function scrollIntoView (e) {
    e.preventDefault();
    const section = e.target.getAttribute("href");
    const sectionElement = document.querySelector(section);
    sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// Scroll to anchor id using scrollTO event
function scrollToSection(e) {
    e.preventDefault();
    const section = e.target.getAttribute("href");
    const sectionElement = document.querySelector(section);
    sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to each section on click
for (let navItem of navigation) {
    navItem.addEventListener("click", scrollToSection);
}


//header menu
let header = document.getElementById("navbar__list");

//scroll button
let scrollButton = document.getElementById("button");


// Set sections as active
function setSectionsActive() {
    for (let section of sectionHeading) {
        if (isSectionInViewport(section) === true) {
            section.setAttribute("class", "your-active-class");
        } else {
            section.removeAttribute("class");
        }
    }
}



