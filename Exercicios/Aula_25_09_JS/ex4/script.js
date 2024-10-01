let habilidades = ['Html', 'CSS', 'Java', 'JavaScript'];
let contratado;

document.getElementById('botao').addEventListener('click', function () {
    let resposta = document.getElementById('entradaUsuario').value;

    if (resposta.toLowerCase() == 'nao') {
        habilidades.pop();
    }
    resultado = habilidades.includes('JavaScript');

    if (resultado == true) {
        document.getElementById('meuParagrafo').innerHTML = "Você está contratado!"
    } else {
        document.getElementById('meuParagrafo').innerHTML = "Você não está contratado!"
    }
});

