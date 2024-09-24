document.getElementById('open_btn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');

    sidebar.classList.toggle('open-sidebar');
    main.classList.toggle('shifted');
});

function addInput() {
    const container = document.querySelector('.input-group');
    const newInputBox = document.createElement('div');
    newInputBox.classList.add('input-box');
    newInputBox.innerHTML = `
        <label for="newItem">Novo Item</label>
        <input type="text" name="newItem" placeholder="Digite o novo item" required>
    `;
    // Adiciona o novo input abaixo de todos os outros inputs, exceto a textarea
    container.appendChild(newInputBox);
}