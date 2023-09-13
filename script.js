import {UI} from "./ui.js";

const ui = new UI();



const titleElement = document.querySelector("#title");
const nameElement = document.querySelector("#name");
const urlElement = document.querySelector("#url");
const addPerson = document.querySelector("#addPerson")

const carousel = document.querySelector(".carousel");
const lrBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;



function addPersonUI (e){
    
    const title = titleElement.value;
    const name = nameElement.value;
    const url = urlElement.value;
    
    if( title === "" || name === "" || url === "" ){
        
        alert("Tüm alanları doldurun..");
        
    }else { 
        carousel.innerHTML += 
        `
        <li class="card">
        <div class="img"><img src="${url}" alt="img" draggable="false"></div>
        <h2>${name}</h2>
        <span>${title}</span       
        </li>        `    
    };
    e.preventDefault();
}

let isDrag = false, startX, startScrollLeft;

//Add event listeners for the arrow buttons to scroll the carousel left and right
lrBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    
    isDrag = true;
    carousel.classList.add("drag");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const drag = (e) => {
    if (!isDrag) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    
}

const dragStop = () => {
    isDrag = false;
    carousel.classList.remove("drag");
}

document.carousel


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", drag);
document.addEventListener("mouseup", dragStop);
addPerson.addEventListener("click", addPersonUI);