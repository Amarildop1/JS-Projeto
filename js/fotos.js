import fotosGaleria from "./model/fotosGaleria.js";


/* ********** INSERINDO GALERIA NA PÁGINA ********** */
function insereGalerias(){
    fotosGaleria.map( fotosMes => addGaleriaDoMes(fotosMes) );
}

function addGaleriaDoMes(fotos){
    const fotosDoMes = `

        <a href="${fotos.link}"><li id="${fotos.id}"><span>${fotos.nome}</span></li></a>

    `;
    const mostraFotos = document.querySelector('#meses');
    mostraFotos.insertAdjacentHTML('beforeend', fotosDoMes);
}

insereGalerias();
