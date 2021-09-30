//Validação de E-mail
function validarEmail(){

    const emailInformado = document.querySelector("#email").value;
    const padraoDeEmailCerto = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/;
    const correto = padraoDeEmailCerto.test(emailInformado);

    if (!correto){
        alert("O e-mail informado é Inválido ou está vazio!");
    }
}

//Validação de Telefone
function validarTelefone(){

    const telefoneInformado = document.querySelector("#telefone").value;
    const padraoTelefoneCerto = /\D?\d{2}\D?\s?\d{5}-?\d{4}/;
    const correto = padraoTelefoneCerto.test(telefoneInformado);

    if (!correto){
        alert("O telefone informado é Inválido ou está vazio!");
    }
}

function validacoes(){
    validarEmail();
    validarTelefone();
}