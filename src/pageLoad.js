import { createHome } from "./homeTab";

export function createSkeleton(){
    let content = document.querySelector('#content');
    let headerBlock = document.createElement("div");
    headerBlock.classList.add("headerBlock");
    content.appendChild(headerBlock)
    let header = document.createElement('h2');
    headerBlock.appendChild(header);
    header.innerText = "Ichiraku Ramen\n一楽ラーメン";
    let tabs = document.createElement('div');
    tabs.classList.add("tabs");
    content.appendChild(tabs);
    let home = document.createElement('button');
    home.innerText ="Home";
    let menu = document.createElement('button');
    menu.innerText = "Menu";
    let contact = document.createElement('button');
    home.classList.add("home","tab");
    menu.classList.add("menu","tab");
    contact.classList.add("contact","tab");
    contact.innerText = "Contact";
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

    let tabItem = document.createElement('div');
    tabItem.classList.add('tabItem');
    content.appendChild(tabItem);
    createHome(tabItem);
    return tabItem;
}