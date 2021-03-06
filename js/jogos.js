import { insereMenu, insereItemRodape } from "./main.js";

const api = './js/dados/dataSetJogos.json';

/* ********** INSERINDO JOGOS NA PÁGINA ********** */
async function insereJogos(){
    const response = await fetch(api);
    const jogos = await response.json();
    
    jogos.map( jogo => addJogosNaTabela(jogo) );
}

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
