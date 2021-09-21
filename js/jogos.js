import jogos from "./model/dataSetJogos.js";
import menu from "./model/menu.js";
import rodape from "./model/rodape.js";
import { insereMenu, insereItemRodape } from "./main.js";

/* ********** INSERINDO JOGOS NA PÁGINA ********** */
function insereJogos(){
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
