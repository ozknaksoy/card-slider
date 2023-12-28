export class UI {

    constructor() {
    
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