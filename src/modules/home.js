const homepage = function() {
    // DOM Elements
    const contentDiv = document.querySelector("#content");

    
    // Creating Elements
    // Navigation Bar Elements
    const navbarDiv = document.createElement("div");
    navbarDiv.classList.add("navbar");
    const navLinkHome = document.createElement("a");
    navLinkHome.setAttribute("href", "#");
    navLinkHome.classList.add("active");
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
    // Homepage Elements
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("restaurant-image");
    const backgroundImage = document.createElement("img");
    backgroundImage.setAttribute("src", "images/restaurant-pic.jpg");
    const centeredClass = document.createElement("div");
    centeredClass.classList.add("centered");
    centeredClass.innerText = "Lazy Dog";
    const lineBreak = document.createElement("BR");
    const spanText = document.createElement("span");
    spanText.classList.add("smaller-text");
    spanText.innerText = "This restaurant is so outstanding that it actually exists in real life (and maybe at a location near you). The picture shown here is not an actual LazyDog location.";


    // Appending Elements to Each Other
    contentDiv.appendChild(navbarDiv);
    navbarDiv.appendChild(navLinkHome);
    navbarDiv.appendChild(navLinkMenu);
    navbarDiv.appendChild(navLinkAbout);
    navbarDiv.appendChild(navLinkContact);

    contentDiv.appendChild(imageDiv);
    imageDiv.appendChild(backgroundImage);
    imageDiv.appendChild(centeredClass);
    centeredClass.appendChild(lineBreak);
    centeredClass.appendChild(spanText);
}

export {homepage};