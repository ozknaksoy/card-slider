import { UI } from "./ui.js";
// import { Profile } from "./profile.js";
import { Request } from './request.js';
import { Mouse } from "./mouse.js";


// npx json-server --watch add.json
const titleElement = document.querySelector("#title");
const nameElement = document.querySelector("#name");
const urlElement = document.querySelector("#url");
const addPerson = document.querySelector("#addPerson")

const lrBtns = document.querySelectorAll(".wrapper i");
const carousel = document.getElementById("carousel");
const firstCardWidth = carousel.querySelector(".card");


const request = new Request();
const ui = new UI();
const mouse = new Mouse(lrBtns, carousel, firstCardWidth)


addPerson.addEventListener("click", addPersonUI);



function addPersonUI(e) {
    e.preventDefault();
    const title = titleElement.value;
    const name = nameElement.value;
    const url = urlElement.value;

    if (title === "" || name === "" || url === "") {
        alert("Tüm alanları doldurun..");

    } else {
        request.post('http://localhost:3000/addJSON', {
            "title": title,
            "name": name,
            "url": url
        });

        request.get('http://localhost:3000/addJSON')
            .then(res => {
                console.log(res);
                ui.render(res);
            })
            .catch(console.error);

    };

}

mouse.move()