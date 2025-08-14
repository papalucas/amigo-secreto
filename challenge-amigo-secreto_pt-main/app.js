// criando array amigos
let amigos = [];

function adicionarAmigo() {
    // Capturando valor do campo de entrada
    let amigo = document.querySelector('input').value;

    //validando a entrada para verificar que não está vazia
    if (amigo == ''){

        // Se estiver vazio, vai exibir um alert de erro
        alert('Por favor, insira um nome.');

    } else {
        // Se estiver preenchido, será adicionado em amigos
        amigos.push(amigo);
        atualizarListaAmigos()
    }
    // Após a validação limpa o campo de entrada
    document.querySelector('input').value = '';

    // Log de exibição par validar array
    console.log(amigos)
}

function atualizarListaAmigos() {
    // Obtém os elementos do array amigos
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista existente para garantir que não tenha duplicados ao atualizar
    listaAmigos.innerHTML = '';

    // Percorrer o array e cria elementos de lista para cada nome no HTML
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];

        //Adiciona elementos a lista
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    // Validar que há amigos disponíveis (array não está vazio)
    if (amigos.length > 1) {
        // Gerar um índice aleatório para selecionar um amigo do array
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obter o nome do amigo sorteado com base no índice aleatório
        let amigoSorteado = amigos[indiceAleatorio];

        // Mostrar o resultado atualizando o HTML
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '<p>O amigo sorteado foi: ' + amigoSorteado + '</p>';
    } else {
        alert('Por favor, insira ao menos dois nomes para realizar o sorteio.');
    }
}