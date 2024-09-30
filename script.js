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

function addInput() {
    const addedItems = document.getElementById('addedItems');

    // Cria um grupo de inputs
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';

    inputGroup.innerHTML = `
    <div class= 'cont-pai'>
    <div class= "cont">
        <div class="input-box flex-column">
            <label for="item">Item</label>
            <input type="text" name="item" placeholder="Digite o item" required>
        </div>
        <div class="input-box flex-column">
            <label for="codigo">Código e-fisco</label>
            <input type="text" name="codigo" placeholder="Digite o código" required>
        </div>
        <div class="input-box flex-column">
            <label for="quantidade">Quantidade</label>
            <input type="text" name="quantidade" placeholder="Digite a quantidade" required>
        </div>
      </div>  

      <div class="cont">
        <div class="input-box flex-column">
            <label for="publico">Preço Público</label>
            <input type="tel" name="publico" placeholder="Digite o preço público" required>
        </div>
        <div class="input-box flex-column">
            <label for="cotacao">Cotação</label>
            <input type="text" name="cotacao" placeholder="Digite a cotação" required>
        </div>
        <div class="input-box flex-column">
            <label for="midia">Mídia Especializada</label>
            <input type="text" name="midia" placeholder="Digite a mídia" required>
        </div>
       </div> 
       <button type="button" onclick="this.parentElement.parentElement.remove()">Remover</button>
       </div>


    `;

    // Insira o novo grupo de inputs
    const currentInputs = addedItems.querySelectorAll('.input-group');
    if (currentInputs.length < 3) {
        addedItems.appendChild(inputGroup);
    } else {
        const newGroup = document.createElement('div');
        newGroup.className = 'input-group';
        newGroup.appendChild(inputGroup);
        addedItems.appendChild(newGroup);
    }
}
