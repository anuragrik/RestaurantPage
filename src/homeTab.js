import bgImage from './bgimagehome.jpg';

export function createHome(tabItem){
    let homeBlock = document.createElement("div");
    homeBlock.classList.add("homeBlock");
    tabItem.appendChild(homeBlock);
    /*let image = document.createElement("img");
    image.setAttribute("src", bgImage);
    image.classList.add("main-bg-image");
    homeBlock.appendChild(image);*/
    let restaurantDesc = document.createElement("div");
    restaurantDesc.classList.add("restaurantDesc");
    restaurantDesc.innerText = "This is the Seventh Hokage's favourite restaurant\nServing since the Third Ninja War"
    homeBlock.appendChild(restaurantDesc);
    return;
}