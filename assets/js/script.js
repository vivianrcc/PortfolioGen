let nome = document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let mensagem = document.querySelector('#mensagem');
let nomeOK = false;
let emailOK = false;
let assuntoOK = false;
let mensagemOK = false;
let mapa = document.querySelector('#mapa');

function validationNome() {
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = 'Nome válido';
        txtNome.style.color = 'green';
        nomeOK = true;
    }
}

function validationEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    let email = document.querySelector('#email').value;

    if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido';
        txtEmail.style.color = 'red';
        txtEmail.style.display = 'block';
    } else {
        txtEmail.style.display = 'none';
        emailOK = true;
    }
}


function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');
    if (assunto.value.length >= 30) {
        txtAssunto.innerHTML = 'Texto muito grande! O assunto deve ter no máximo 20 caracteres';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOK = true;
    }
}

function enviar() {
    if (nomeOK && emailOK && assuntoOK) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha o formulário corretamente antes de enviar...');
    }
}

function mapaZoom() {
    mapa.style.width = '800px';
    mapa.style.height = '600px';
}

function mapaNormal() {
    mapa.style.width = '400px';
    mapa.style.height = '350px';
}