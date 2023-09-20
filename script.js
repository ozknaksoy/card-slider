import { UI } from "./ui.js";
// import { Profile } from "./profile.js";
import { Request } from './request.js';


// npx json-server --watch add.json


const request = new Request();
const ui = new UI();

// const profile = new Profile();



const titleElement = document.querySelector("#title");
const nameElement = document.querySelector("#name");
const urlElement = document.querySelector("#url");
const addPerson = document.querySelector("#addPerson")

const carousel = document.getElementById("carousel");
const lrBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;


// function addProfileJson() {

//     request.post('http://localhost:3000/addJSON', {
//         "title": titleElement.value,
//         "name": nameElement.value,
//         "url": urlElement.value
//     });


// }


async function addPersonUI(e) {
    e.preventDefault();
    const title = titleElement.value;
    const name = nameElement.value;
    const url = urlElement.value;
    
    if (title === "" || name === "" || url === "") {
        alert("Tüm alanları doldurun..");
        
    } else {
        console.log("ekliyo")
        request.post('http://localhost:3000/addJSON', {
            "title": title,
            "name": name,
            "url": url
        });
        console.log("alıyo")
        const data = await request.get('http://localhost:3000/addJSON')
        console.log(data);
        ui.render(data);

    };
    
}
// function getAddProfile() {
//     request.get('http://localhost:3000/addJSON').then((profiles) => {
//         ui.render(profiles);
//     })
// }

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