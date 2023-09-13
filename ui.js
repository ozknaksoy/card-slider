export class UI {
   
    newProfileUI (newProfile){
        carousel.innerHTML += 
        `
        <li class="card">
        <div class="img"><img src="${newProfile.url}" alt="img" draggable="false"></div>
        <h2>${newProfile.name}</h2>
        <span>${newProfile.title}</span>
        </li>
        `

    };

};