// Arquivo: scripts.js

// 1. Espera a página HTML carregar completamente antes de rodar o script.
document.addEventListener('DOMContentLoaded', function() {

    // 2. Seleciona o botão que vai mostrar/esconder os contatos.
    // Usamos o 'id' que demos a ele no HTML.
    const botaoToggle = document.getElementById('botao-toggle-contatos');

    // 3. Seleciona a div que contém a lista de botões de contato.
    // Usamos o 'id' que demos a ela no HTML.
    const listaDeContatos = document.getElementById('lista-botoes-contato');

    // 4. Verifica se realmente encontramos os dois elementos na página.
    // É uma boa prática para evitar erros se os IDs estiverem errados.
    if (botaoToggle && listaDeContatos) {

        // 5. Adiciona um "ouvinte de evento" ao botão de toggle.
        // Isso significa: "quando este botão for clicado, execute a função a seguir".
        botaoToggle.addEventListener('click', function() {
            
            // 6. A mágica acontece aqui: classList.toggle('escondido')
            // Se a 'listaDeContatos' TIVER a classe 'escondido', ela é REMOVIDA.
            // Se a 'listaDeContatos' NÃO TIVER a classe 'escondido', ela é ADICIONADA.
            // Isso faz com que a lista apareça e desapareça!
            listaDeContatos.classList.toggle('escondido');

            // 7. (Opcional) Mudar o texto do botão e o ícone.
            if (listaDeContatos.classList.contains('escondido')) {
                botaoToggle.innerHTML = 'Mostrar Contatos <i class="fas fa-chevron-down"></i>';
            } else {
                botaoToggle.innerHTML = 'Esconder Contatos <i class="fas fa-chevron-up"></i>';
            }
        });
    } else {
        // Se um dos elementos não for encontrado, esta mensagem aparecerá no console do navegador.
        // Para ver o console: no navegador, clique com o botão direito -> Inspecionar -> Console.
        console.error("Elemento #botao-toggle-contatos ou #lista-botoes-contato não encontrado no HTML!");
    }
});