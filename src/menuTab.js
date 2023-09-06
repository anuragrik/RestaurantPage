import itemOne from "./menuItemOne.jpg";
import itemTwo from "./menuItemTwo.jpg";
import itemThree from "./menuItemThree.jpg";
import itemFour from "./menuItemFour.jpeg";

export function createMenu(tabItem){
    let menuBlock = document.createElement("div");
    menuBlock.classList.add("menuBlock");
    tabItem.appendChild(menuBlock);

    let menuItemOne = document.createElement("div");
    menuItemOne.classList.add("menuItemOne");
    menuBlock.appendChild(menuItemOne);
    let menuItemOnePic = document.createElement("img");
    menuItemOnePic.setAttribute("src", itemOne);
    menuItemOnePic.classList.add("menu","item");
    let menuItemOneHead = document.createElement("div");
    menuItemOneHead.classList.add("itemHead");
    menuItemOneHead.innerText = "Naruto's Ramen";
    let menuItemOneDesc = document.createElement("div");
    menuItemOneDesc.innerText = "Ramen, Pork, Tuna flakes, Sardines, Beef";
    menuItemOne.appendChild(menuItemOnePic)
    menuItemOne.appendChild(menuItemOneHead)
    menuItemOne.appendChild(menuItemOneDesc)

    let menuItemTwo = document.createElement("div");
    menuItemTwo.classList.add("menuItemTwo");
    menuBlock.appendChild(menuItemTwo);
    let menuItemTwoPic = document.createElement("img");
    menuItemTwoPic.setAttribute("src", itemTwo);
    menuItemTwoPic.classList.add("menu","item");
    let menuItemTwoHead = document.createElement("div");
    menuItemTwoHead.classList.add("itemHead");
    menuItemTwoHead.innerText = "Kakashi's Fish";
    let menuItemTwoDesc = document.createElement("div");
    menuItemTwoDesc.innerText = "Salmon, Tomatoes, Olives, Capers, Paprika";
    menuItemTwo.appendChild(menuItemTwoPic)
    menuItemTwo.appendChild(menuItemTwoHead)
    menuItemTwo.appendChild(menuItemTwoDesc)

    let menuItemThree = document.createElement("div");
    menuItemThree.classList.add("menuItemThree");
    menuBlock.appendChild(menuItemThree);
    let menuItemThreePic = document.createElement("img");
    menuItemThreePic.setAttribute("src", itemThree);
    menuItemThreePic.classList.add("menu","item");
    let menuItemThreeHead = document.createElement("div");
    menuItemThreeHead.classList.add("itemHead");
    menuItemThreeHead.innerText = "Tobi's Dango";
    let menuItemThreeDesc = document.createElement("div");
    menuItemThreeDesc.innerText = "Rice flour, Soy sauce, Red bean, Sugar";
    menuItemThree.appendChild(menuItemThreePic)
    menuItemThree.appendChild(menuItemThreeHead)
    menuItemThree.appendChild(menuItemThreeDesc)

    let menuItemFour = document.createElement("div");
    menuItemFour.classList.add("menuItemFour");
    menuBlock.appendChild(menuItemFour);
    let menuItemFourPic = document.createElement("img");
    menuItemFourPic.setAttribute("src", itemFour);
    menuItemFourPic.classList.add("menu","item");
    let menuItemFourHead = document.createElement("div");
    menuItemFourHead.classList.add("itemHead");
    menuItemFourHead.innerText = "Itachi's Meal";
    let menuItemFourDesc = document.createElement("div");
    menuItemFourDesc.innerText = "Crab, Chicken, Lobster, Rice, Fish";
    menuItemFour.appendChild(menuItemFourPic)
    menuItemFour.appendChild(menuItemFourHead)
    menuItemFour.appendChild(menuItemFourDesc)

    return;
}