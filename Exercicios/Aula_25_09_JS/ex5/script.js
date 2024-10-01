let listaCompras = [];

document.getElementById('botao').addEventListener('click', function () {
    let resposta = document.getElementById('entradaUsuario').value;

    listaCompras.push(resposta);

    document.getElementById('meuParagrafo').innerHTML = 'Sua lista de compras contém: <br>' + listaCompras.join('<br>');
});

