import { UI } from "./ui.js";
import { Profile } from "./profile.js";

// const profile = new Profile();



const titleElement = document.querySelector("#title");
const nameElement = document.querySelector("#name");
const urlElement = document.querySelector("#url");
const addPerson = document.querySelector("#addPerson")

const carousel = document.querySelector(".carousel");
const lrBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;



function addPersonUI(e) {
    e.preventDefault();

    const title = titleElement.value;
    const name = nameElement.value;
    const url = urlElement.value;

    if (title === "" || name === "" || url === "") {
        alert("Tüm alanları doldurun..");

    } else {
        debugger;

        const newProfile = new Profile(title, name, url);
        const ui = new UI(title, name, url);

        // console.log(newProfile.data);
        // console.log(ui.render())
        ui.render(newProfile);    

    };
}

let isDrag = false, startX, startScrollLeft;

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