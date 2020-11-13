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
            name: "Chmichanga",
            desc: "That really good dish that Deadpool raves on and on about"
        }
    ]

    const contentDiv = document.querySelector("#content");

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = "Menu";
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-items");
    const menuH4 = document.createElement("h4");
    const menuSpan = document.createElement("span");

    contentDiv.appendChild(containerDiv);
    containerDiv.appendChild(h1Tag);
}

export {menupage};