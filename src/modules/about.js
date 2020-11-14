const aboutpage = function() {
    // DOM Elements
    const contentDiv = document.querySelector("#content");

    // Creating Elements
    // Container
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    // Page Header
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "About";
    // Span Text
    const spanTag = document.createElement("span");
    spanTag.innerText = "This restaurant will probably maybe never actually come to \
                        a location near you. Even though it is a real \
                        restuarant this website was only built to help further \
                        study the use of webpack and the new ES6 modules \
                        for importing files into another and for handling \
                        all of the website html creation with Javascript.";

    // Appending Elements to Each Other
    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(h1Tag);
    containerDiv.appendChild(spanTag);
}

export {aboutpage};