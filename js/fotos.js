const api = './js/dados/fotosGaleria.json';

/* ********** INSERINDO GALERIA NA PÁGINA ********** */
async function insereGalerias(){
    const response = await fetch(api);
    const galeria = await response.json();
    
    galeria.map( fotosMes => addGaleriaDoMes(fotosMes) );
}

function addGaleriaDoMes(fotos){
    const fotosDoMes = `

    <a href="${fotos.link}"><li id="${fotos.id}"><span>${fotos.nome}</span></li></a>

    `;
    const mostraFotos = document.querySelector('#meses');
    mostraFotos.insertAdjacentHTML('beforeend', fotosDoMes);
}

insereGalerias();
