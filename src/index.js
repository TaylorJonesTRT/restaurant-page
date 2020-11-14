import {homepage} from "./modules/home";
import {menupage} from "./modules/menu";
import {aboutpage} from "./modules/about";
import {contactpage} from "./modules/contact";

const InitialLoad = (() => {

    window.onload = (event) => {
        createNavBar();
        homepage();
        addLinkEvents();
    }

    // Navigation Links
    const pages = ["Home", "Menu", "About", "Contact"];

    // DOM Elements
    const contentDiv = document.querySelector("#content");
    

    // Creating Elements
    // Navigation Bar Elements
    const navbarDiv = document.createElement("div");
    navbarDiv.classList.add("navbar");
    // Function to create multiple nav links
    function createNavLink(page){
        let navLinkHref = document.createElement("a");
        navLinkHref.classList.add("nav-link");
        navLinkHref.setAttribute("href", "#");
        navLinkHref.innerText = page;
        navbarDiv.appendChild(navLinkHref);
    }
    function createNavBar() {
        let i = 0;
        for (i; i < pages.length; i++) {
            createNavLink(pages[i]);
        }
        // Appending Elements to Each Other
        contentDiv.appendChild(navbarDiv);
    }

    // CLearing Page Content
    function clearContent() {
        while (contentDiv.lastChild) {
            contentDiv.removeChild(contentDiv.lastChild);
        }
    }

    // Navigation Logic
    function navSelection(page) {
        // console.log(page.innerText);
        if (page.innerText === "Home") {
            removeLinkEvents();
            clearContent();
            homepage();
            createNavBar();
            addLinkEvents();
        } else if (page.innerText === "Menu") {
            removeLinkEvents();
            clearContent();
            createNavBar();
            menupage();
        }
    }

    // Adding Event Listeners
    function addLinkEvents() {
        let navlinks = document.querySelectorAll(".nav-link");
        navlinks.forEach((link) => {
            link.addEventListener("click", function() {
                navSelection(link);
            })
        })
    }
    function removeLinkEvents() {
        let navlinks = document.querySelectorAll(".nav-link");
        navlinks.forEach((link) => {
            link.removeEventListener("click", function(){})
        });
    }

    addLinkEvents();

})();

// TODO: Create the tab switching logic
// TODO: Import the seperate page js files