function funcao() {
    let resultado = window.prompt('Qual a sua nota?', 'Digite sua nota aqui');

    resultado = Number(resultado);
    
    if (resultado >= 6) {
        document.getElementById('meuParagrafo').innerHTML = 'Parabéns! Você foi aprovado.'
    } else {
        document.getElementById('meuParagrafo').innerHTML = 'Que pena. Você foi reprovado.'
    }
}


