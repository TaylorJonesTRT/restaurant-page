const menu = function() {
<<<<<<< HEAD
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
    navLinkMenu.classList.add("active");
    navLinkMenu.innerText = "Menu";
    const navLinkAbout = document.createElement("a");
    navLinkAbout.setAttribute("href", "#");
    navLinkAbout.innerText = "About";
    const navLinkContact = document.createElement("a");
    navLinkContact.setAttribute("href", "#");
    navLinkContact.innerText = "Contact";
    // Homepage Elements
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Menu";


    // Appending Elements to Each Other
    contentDiv.appendChild(navbarDiv);
    navbarDiv.appendChild(navLinkHome);
    navbarDiv.appendChild(navLinkMenu);
    navbarDiv.appendChild(navLinkAbout);
    navbarDiv.appendChild(navLinkContact);

    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(h1Tag);
=======
>>>>>>> 4994cbbac96e9fb44d73f386126d0f7b00c87f08
}

export {menu};