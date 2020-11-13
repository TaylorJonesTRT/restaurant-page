const menupage = function() {
    const menuItems = [
        {
            name: "Ribeye - $25",
            desc: "A good piece of stead if I do say so myself"
        },
        {
            name: "One Taco - $58",
            desc: "Yes it's only 1 taco on a plate with only meat and cheese. But this is the best meat and cheese taco you'll ever have"
        },
        {
            name: "Chmichanga - $10",
            desc: "That really good dish that Deadpool raves on and on about"
        }
    ]

    // DOM Elements
    const contentDiv = document.querySelector("#content");

    // Creating Elements
    // Container
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    // Page Header
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Menu";

    // Appending Elements to Each Other
    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(h1Tag);

    // Iterating through menuItems to create each item and add to the DOM
    function addMenuItem(item) {
        let menuItemDiv = document.createElement("div");
        menuItemDiv.classList.add("menu-items");
        containerDiv.appendChild(menuItemDiv);

        let itemName = document.createElement("h4");
        menuItemDiv.appendChild(itemName);
        itemName.innerText = menuItems[item].name;

        let itemDesc = document.createElement("span");
        menuItemDiv.appendChild(itemDesc);
        itemDesc.innerText = menuItems[item].desc;
        
    }

    for (let i = 0; i < menuItems.length; i++) { 
        addMenuItem(i);
    }
    
}

export {menupage};