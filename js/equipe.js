import { insereMenu, insereItemRodape } from "./main.js";

const api = './js/dados/dataSetEquipes.json';

/* ********** INSERINDO EQUIPES NA PÁGINA ********** */
async function insereEquipes(){
    const response = await fetch(api);
    const equipes = await response.json();

    equipes.map( equipe => addEquipes(equipe) );
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