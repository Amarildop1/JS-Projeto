import equipes from "./model/dataSetEquipes.js";
import menu from "./model/menu.js";
import rodape from "./model/rodape.js";
import jogos from "./model/dataSetJogos.js";

function insereJogos(){
    for(const jogo of jogos){
        addJogosNaTabela(jogo);
    }
}

    /*         <div class="equipe">
            <img src="${time.imagem}">
            <ul class="listaEquipe">
                <li><span>Técnico: </span>${time.tecnico}</li>
                <li><span>Fundação: </span>${time.fundacao}</li>
                <li><span>Ginásio: </span>${time.ginasio}</li>
                <li><span>Endereço: </span>${time.endereco}</li>
            </ul>
        </div> */

        /*         idjogo: '20',
        data: '01/12/2021',
        hora: '08:00',
        equipeA: 'Jampa',
        placar: 'x',
        equipeB: 'Campina',
        local: 'Vila Olímpica', */


function addJogosNaTabela(game){

    /* JOGOS PARA A TELA DO DESKTOP */
    const jogoTelaDesktop = `
                <tr>
                    <td> ${game.idjogo} </td>
                    <td> <br>${game.data}</br> ${game.dia} </td>
                    <td> ${game.hora} </td>
                    <td> ${game.equipeA} </td>
                    <td> ${game.placar} </td>
                    <td> ${game.equipeB} </td>
                    <td><br> ${game.local} <br> ${game.bairro} </td>
                </tr>
    `;
    const mostraJogoDesktop = document.querySelector('.telaDesktop');
    mostraJogoDesktop.insertAdjacentHTML('beforeend', jogoTelaDesktop);

    /* JOGOS PARA A TELA DE SMARTPHONES */
    const jogoTelaMobile = `
                        <tr>
                            <td> ${game.idjogo} </td>
                            <td> <br>${game.data}</br>
                                <br>${game.dia}</br>
                                <br>${game.hora}</br>
                            </td>
                            <td> <br>${game.equipeA} </br>x<br> ${game.equipeB} </br> </td>
                            <td><br> ${game.local},<br> ${game.bairro} </td>
                        </tr>      
    `;
    const mostraJogoMobile = document.querySelector('.telaMobile');
    mostraJogoMobile.insertAdjacentHTML('beforeend', jogoTelaMobile);

}

insereJogos();





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



/* INSERINDO RODAPÉ NAS PÁGINAS */
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