// Controla a abertura e fechamento da sidebar
document.getElementById('open_btn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');

    sidebar.classList.toggle('open-sidebar');
    main.classList.toggle('shifted');
});

// Controla a exibição da caixa de opções ao clicar em "Adicionar Lote"
document.getElementById('btnAddLote').addEventListener('click', function() {
    const opcoes = document.getElementById('opcoes');
    opcoes.classList.toggle('show');
});

// Controla o clique nas opções e exibe o formulário
document.querySelectorAll('.opcao').forEach(opcao => {
    opcao.addEventListener('click', function() {
        const formContainer = document.getElementById('formContainer');
        const opcoes = document.getElementById('opcoes');
        
        formContainer.classList.remove('hidden');
        formContainer.classList.add('show');

        // Ocultar as opções após a seleção
        opcoes.classList.remove('show');
    });
});
