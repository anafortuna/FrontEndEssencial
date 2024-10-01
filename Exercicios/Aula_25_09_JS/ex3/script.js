function funcao() {
    let resultado = window.prompt('Insira sua idade: ', 'Digite sua idade aqui');

    resultado = Number(resultado);
    
    if (resultado >= 18) {
        document.getElementById('meuParagrafo').innerHTML = 'Legal! Você pode acessar o site!'
    } else {
        document.getElementById('meuParagrafo').innerHTML = 'Que pena. Você ainda não pode acessar o site.'
    }
}