let listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    outros: []
};
function imprimirLista() {
    console.log("--- Lista de Compras ---");
    let listaVazia = true;

    for (const categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            console.log(`    ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaDeCompras[categoria].join(', ')}`);
            listaVazia = false;
        }
    }
    if (listaVazia) {
        console.log("    A lista está vazia!");
    }
    console.log("------------------------");
}
while (true) {
    let pergunta = "O que você deseja fazer?\n\n1. Adicionar um item\n";
    let listaTotal = [].concat(...Object.values(listaDeCompras));
    if (listaTotal.length > 0) {
        pergunta += "2. Remover um item\n";
    }
    pergunta += "3. Sair\n";
    const opcao = prompt(pergunta);
    if (opcao === "1") {
        let item = prompt("Qual comida você deseja inserir?");
        let categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticinios, congelados, doces, outros)");

        if (listaDeCompras.hasOwnProperty(categoria)) {
            listaDeCompras[categoria].push(item);
            alert(`O item "${item}" foi adicionado à categoria "${categoria}".`);
        } else {
            alert("Categoria não encontrada. O item será adicionado em 'outros'.");
            listaDeCompras.outros.push(item);
        }
    } 
    else if (opcao === "2" && listaTotal.length > 0) {
        imprimirLista();
        const itemParaRemover = prompt("A lista atual está no console. Qual item você deseja remover?");
        let itemEncontrado = false;
        for (const categoria in listaDeCompras) {
            const index = listaDeCompras[categoria].indexOf(itemParaRemover);

            if (index !== -1) {
                listaDeCompras[categoria].splice(index, 1);
                itemEncontrado = true;
                alert(`O item "${itemParaRemover}" foi removido da lista!`);
                break; 
            }
        }
        if (!itemEncontrado) {
            alert("Não foi possível encontrar o item dentro da lista!");
        }
    } 
    else if (opcao === "3") {
        break; 
    } 
    else {
        alert("Opção inválida. Por favor, escolha uma das opções disponíveis.");
    }
}
imprimirLista();
alert("Obrigado por usar a Lista de Compras Inteligente!");