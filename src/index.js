import {homepage} from "./modules/home"
import {menupage} from "./modules/menu";

const initialLoad = (() => {
    // DOM Elements
    const contentDiv = document.querySelector("#content");

    // Creating Elements
    // Navigation Bar Elements
    const navbarDiv = document.createElement("div");
    navbarDiv.classList.add("navbar");
    const navLinkHome = document.createElement("a");
    navLinkHome.setAttribute("href", "#");
    navLinkHome.innerText = "Home";
    const navLinkMenu = document.createElement("a");
    navLinkMenu.setAttribute("href", "#");
    navLinkMenu.innerText = "Menu";
    const navLinkAbout = document.createElement("a");
    navLinkAbout.setAttribute("href", "#");
    navLinkAbout.innerText = "About";
    const navLinkContact = document.createElement("a");
    navLinkContact.setAttribute("href", "#");
    navLinkContact.innerText = "Contact";

    // Appending Elements to Each Other
    contentDiv.appendChild(navbarDiv);
    navbarDiv.appendChild(navLinkHome);
    navbarDiv.appendChild(navLinkMenu);
    navbarDiv.appendChild(navLinkAbout);
    navbarDiv.appendChild(navLinkContact);

    // Adding Event Listeners
    

    menupage();
})();

// TODO: Create the tab switching logic
// TODO: Import the seperate page js files