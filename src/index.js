import {createSkeleton} from "./pageLoad";
import {createHome} from "./homeTab";
import {createMenu} from "./menuTab";
import {createContact} from "./contactTab";
import './style.css';

let tabItem = createSkeleton();
let tabChoice = document.querySelectorAll(".tab");
console.log(tabChoice);
let homeBlock = document.querySelector(".homeBlock");
homeBlock.style.display = "flex";
createMenu(tabItem);
createContact(tabItem);
let menuBlock = document.querySelector(".menuBlock");
let contactBlock = document.querySelector(".contactBlock");
tabChoice.forEach((e)=>e.addEventListener("click", function(){
    if(e.textContent=="Home"){
        homeBlock.style.display = "flex";
        contactBlock.style.display = "none";
        menuBlock.style.display = "none";
    }else if(e.textContent=="Menu"){
        homeBlock.style.display = "none";
        contactBlock.style.display = "none";
        menuBlock.style.display = "grid";
    }else{
        homeBlock.style.display = "none";
        contactBlock.style.display = "flex";
        menuBlock.style.display = "none";
    }
}))