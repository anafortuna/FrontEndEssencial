function funcao() {
    let resultado = window.prompt('Insira um número: ', 'Digite o número aqui');

    resultado = Number(resultado);
    
    if (resultado % 2 == 0) {
        document.getElementById('meuParagrafo').innerHTML = 'O número é par.'
    } else {
        document.getElementById('meuParagrafo').innerHTML = 'O número é ímpar.'
    }
}