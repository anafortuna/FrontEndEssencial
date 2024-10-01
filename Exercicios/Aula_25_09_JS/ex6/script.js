let listaTarefas = [];

// Função para adicionar item ao array e exibir na página
function adicionarTarefaLista(descricao, concluida) {
    listaTarefas.push({ descricao: descricao, concluida: concluida });
    atualizarListaTarefas();
}

function atualizarListaTarefas() {
    const ul = document.getElementById('listaTarefas');
    ul.innerHTML = ''; // Limpa a lista antes de recriá-la

    listaTarefas.forEach(function (tarefa, index) {
        let li = document.createElement('li');
        li.textContent = tarefa.descricao;

        // Verifica se a tarefa foi marcada como concluida e adiciona classe "riscado"
        if (tarefa.concluida) {
            li.classList.add('riscado');
        }

        // Cria botão de remover
        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('button');
        botaoRemover.addEventListener('click', function () {
            removerTarefa(index);
        });

        // Cria botão para riscar/retirar o risco
        let botaoRiscar = document.createElement('button');
        botaoRiscar.textContent = tarefa.concluida ? 'Desfazer' : 'Concluída';
        botaoRiscar.classList.add('button');
        botaoRiscar.addEventListener('click', function () {
            tarefa.concluida = !tarefa.concluida; // Alterna o status de "concluida"

            // Atualiza o texto do botão
            botaoRiscar.textContent = tarefa.concluida ? 'Desfazer' : 'Concluída';

            atualizarListaTarefas();
        });
       
        // Adiciona os botões ao item <li>
        li.appendChild(botaoRiscar);
        li.appendChild(botaoRemover);

        // Adiciona o item <li> à lista <ul>
        ul.appendChild(li);
    });

}

// Função para remover item do array
function removerTarefa(index) {
    listaTarefas.splice(index, 1); // Remove o item do array
    atualizarListaTarefas(); // Atualiza a lista
}

// Ação do botão "Adicionar"
document.getElementById('botao').addEventListener('click', function() {
    let descricao = document.getElementById('entradaUsuario').value;
    let concluida = document.getElementById('checkboxConcluida').checked;

    if (descricao) {
        adicionarTarefaLista(descricao, concluida);
        document.getElementById('entradaUsuario').value = ''; // Limpa o campo de texto
        document.getElementById('checkboxConcluida').checked = false; // Desmarca o checkbox
    }
});

// Ação de adicionar item ao pressionar Enter
document.getElementById('entradaUsuario').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let descricao = document.getElementById('entradaUsuario').value;
        let concluida = document.getElementById('checkboxConcluida').checked;

        if (descricao) {
            adicionarTarefaLista(descricao, concluida);
            document.getElementById('entradaUsuario').value = ''; // Limpa o campo de texto
            document.getElementById('checkboxConcluida').checked = false; // Desmarca o checkbox
        } else {
            alert('Não é possível inserir valores nulos.');
        }
    }
});