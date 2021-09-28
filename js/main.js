import menu from "./model/menu.js";
import rodape from "./model/rodape.js";

/* ********** INSERINDO MENU NAS PÁGINAS ********** */
function insereMenu(){
    menu.map( item => addItemMenu(item) );
}

function addItemMenu(itemMenu){
    const item = `
                <li><a href="${itemMenu.link}">${itemMenu.nome}</a></li>
    `;
    const mostraItemMenu = document.querySelector('.listaMenu');
    mostraItemMenu.insertAdjacentHTML('beforeend', item);
}
//insereMenu();
/* ************************************************** */

/* ********** INSERINDO RODAPÉ NAS PÁGINAS ********** */
function insereItemRodape(){
    rodape.map( item => addTextoRodape(item) );
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
//insereItemRodape();
/* ************************************************** */

insereMenu();
insereItemRodape();

export { insereMenu, insereItemRodape }
