export class UI {

    constructor(title, name, url) {
        this.title = title;
        this.name = name;
        this.url = url;
    }

    render (){
        const carousel = document.querySelector(".carousel");
        carousel.innerHTML += 
        `
        <li class="card">
        <div class="img"><img src="${this.url}" alt="img" draggable="false"></div>
        <h2>${this.name}</h2>
        <span>${this.title}</span       
        </li>        `   

    };

};