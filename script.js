document.getElementById('open_btn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');

    sidebar.classList.toggle('open-sidebar');
    main.classList.toggle('shifted');
});

document.getElementById('btnAddLote').addEventListener('click', function() {
    const opcoes = document.getElementById('opcoes');
    opcoes.classList.toggle('show');
});

document.querySelectorAll('.opcao').forEach(opcao => {
    opcao.addEventListener('click', function() {
        const formContainer = document.getElementById('formContainer');
        if (this.id === 'acquisition') {
            formContainer.classList.remove('hidden');
            formContainer.classList.add('show');
        } else {
            formContainer.classList.remove('hidden');
            formContainer.classList.add('show');
            // Aqui você pode adicionar lógica para o formulário de "Serviço"
        }
    });
});
