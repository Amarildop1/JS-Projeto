import equipes from "./model/dataSetEquipes.js";
import menu from "./model/menu.js";
import rodape from "./model/rodape.js";

/* INSERINDO MENU NAS PÁGINAS */
function insereMenu(){
    for(const item of menu){
        addItemMenu(item);
    }
}

function addItemMenu(itemMenu){
    const item = `
                <li><a href="${itemMenu.link}">${itemMenu.nome}</a></li>
    `;
    const mostraItemMenu = document.querySelector('.listaMenu');
    mostraItemMenu.insertAdjacentHTML('beforeend', item);
}
insereMenu();

/* INSERINDO RODAPÉ NA PÁGINA */
function insereItemRodape(){
    for(const item of rodape){
        addTextoRodape(item);
    }
}

function addTextoRodape(text){
    const texto = `
    <p>${text.copyright}</p>
    <p>
        <a href="${text.link}" target="_blank">
            ${text.nome} <i class="fab fa-github"></i>
        </a>
    </p>`;

    const textoRodape = document.querySelector('.rodape');
    textoRodape.insertAdjacentHTML('beforeend', texto);
}
insereItemRodape();



/* INSERINDO EQUIPES NA PÁGINA */
function insereEquipes(){
    for(const equipe of equipes){
        addEquipes(equipe);
    }
}

function addEquipes(time){
    const equipe = `
        <div class="equipe">
            <img src="${time.imagem}">
            <ul class="listaEquipe">
                <li><span>Técnico: </span>${time.tecnico}</li>
                <li><span>Fundação: </span>${time.fundacao}</li>
                <li><span>Ginásio: </span>${time.ginasio}</li>
                <li><span>Endereço: </span>${time.endereco}</li>
            </ul>
        </div>
    `;

    const mostraEquipe = document.querySelector('.equipes');
    mostraEquipe.insertAdjacentHTML('beforeend', equipe);
}

insereEquipes();