export class UI {

    constructor(title, name, url) {
        this.title = title;
        this.name = name;
        this.url = url;
    }

    render(profiles) {
        const carousel = document.querySelector(".carousel");
        
        profiles.forEach(profile => {

            carousel.innerHTML +=
                `
            <li class="card">
            <div class="img"><img src="${profile.url}" alt="img" draggable="false"></div>
            <h2>${profile.name}</h2>
            <span>${profile.title}</span       
            </li>        `

        });

    };

};